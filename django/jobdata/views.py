from django.shortcuts import render
from django.db.models import Max
from .models import *
import numpy as np
from numpy import dot
from numpy.linalg import norm
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

# 코사인 유사도
def cos_sim(A, B):
    return dot(A, B) / (norm(A)*norm(B))


# 직업 특성 행렬화 시켜주기
def job_info():
    dataset = All_in_one.objects.values('wanted_code', 'job_family_code', 'job_sub_code', 'job_code')
    all_job = Wanted.objects.all()
    d = JobSubFamily.objects.all()
    jc = JobCategory.objects.all()
    c= Cities.objects.all()
    r = Regions.objects.all()

    # 직업 중분류 - 행렬 인덱스 매칭
    sub_to_index = {}
    for i in range(len(d)):
        sub_to_index[d[i].code] = i+14

    # 직업 소분류 - 행렬 인덱스 매칭
    cate_to_index = {}
    for j in range(1172):
        cate_to_index[jc[j].job_code.code] = j + 126

    # 지역 - 행렬 인덱스 매칭
    city_to_region = {}
    city_to_index = {}
    region_to_index = {}

    i = 1298
    for k in r:
        region_to_index[k.code] = i
        i += 1
    
    # city - region 매칭
    # city - 행렬 인덱스 매칭
    for j in range(len(c)):
        city_to_region[c[j].code] = c[j].region_code.code
        city_to_index[c[j].code] = j + 1298

    # 행렬 만들기
    # 전체 열 개수 1536개 

    # len(all_job) 대신 -> wanted_code 최고값 뽑아 주기
    job_length = Wanted.objects.aggregate(Max('code'))

    jobMatrix = [[0]*1536 for _ in range(job_length['code__max']+1)]
    
    # 중복 job 코드 +1 씩 해주기
    for da in dataset:
        q = da['wanted_code']
        w = da['job_family_code']
        e = da['job_sub_code']
        jobMatrix[q][w] += 1
        jobMatrix[q][sub_to_index[e]] += 1
    
    
    # 전체 특성에 대해 값 더해주기

    # degree - 행렬 인덱스 매칭
    #         1527 28 29 30

    # working_day - 행렬 인덱스 매칭
    #          1531 1532 1533
    
    # career 요구 - 행렬 인덱스 매칭
    #           1534 35


    for job in all_job:        
        # 학력
        a = job.degree_code.degree_id
        if a == 0:
            jobMatrix[job.code][1527:1531] = [1, 1, 1, 1]       # 학력무관 - 1 1 1 1
        elif a == 4:
            jobMatrix[job.code][1527:1531] = [0, 1, 1, 1]       # 대졸 2~3 - 0 1 1 1 
        elif a == 5:
            jobMatrix[job.code][1527:1531] = [0, 0, 1, 1]       # 대졸 4   - 0 0 1 1
        elif a == 6:
            jobMatrix[job.code][1527:1531] = [0, 0, 0, 1]       # 석사     - 0 0 0 1
        else:
            jobMatrix[job.code][1527:1531] = [0, 0, 0, 0]       # 박사     - 0 0 0 0

        # 주 근무 일수
        working = job.working_day
        if working == "주6일근무":
            jobMatrix[job.code][1531] = 1
        elif working == "주5일근무":
            jobMatrix[job.code][1532] = 1
        elif "주 5일 미만":
            jobMatrix[job.code][1533] = 1

        # 경력
        car = job.career
        if car == "관계없음":                                   # 관계없음    1   1
            jobMatrix[job.code][1534:1536] = [1, 1]
        elif car == "신입":                                     #  신입       1   0
            jobMatrix[job.code][1534:1536] = [1, 0]         
        elif car == "경력":                                     #  경력       0   1
            jobMatrix[job.code][1534:1536] = [0, 1]        


        # 지역 소분류
        jobMatrix[job.code][city_to_index[job.city_code.code]] += 1
        # 직업 소분류
        jobMatrix[job.code][cate_to_index[job.job_code.code]] += 1
        
    # npy로 저장해주기
    np.save('jobMatrix', jobMatrix) # jobMatrix.npy
    return jobMatrix

# 직업 별 유사도 행렬 불러와서 상위 5개 뽑아주기
# 이후 sim_job_num 에 상위 5개씩 저장
def job_sort():
    jobMatrix = np.load('jobMatrix.npy')
    # 유사도 비교하여 저장
    print(jobMatrix)
    calc_sim_job = cosine_similarity(jobMatrix, jobMatrix)
    # 유사도가 큰 순으로 정렬한 인덱스를 추출하되 자기 자신 제외하기
    b = np.sort(calc_sim_job)
    sorted_index = np.argsort(calc_sim_job)[:, ::-1]
    sorted_index = sorted_index[:, 1:]
    sim_job = []
    # 현재 인덱스 번호이므로 실제 공고 번호로 변경해준 후 저장
    for i in sorted_index:
        sim_job.append(i[:5])
    np.save('sim_job_num', sim_job)
    return sim_job

# api 호출
# 유사한 공고 파일 호출
@api_view(['GET'])
def load_sim_job(request, wanted_job_num):
    reader = np.load('sim_job_num.npy')
    return Response(reader[wanted_job_num])



# ===========실시간으로 공고 - 공고 계산 위한 함수 =================


# job matrix 들고오기
def load_job_matrix():
    job_info()
    reader = np.load('jobMatrix.npy')
    return reader

# 해당 공고 유사도 판단하여 출력해주기
# 공고 클릭시 유사도 계산 후 출력 
@api_view(['GET'])
def similar_job(wanted_job):
    all_job_List = load_job_matrix()
    job_job_similar = []

    for i in range(1, len(all_job_List)):
        if i != wanted_job:
            job_job_similar.append((cos_sim(all_job_List[wanted_job], all_job_List[i]), i))

    job_job_similar.sort(key=lambda x:x[0], reverse=True)
    similar_job_code = [i[1] for i in job_job_similar[:5]]
    return similar_job_code[wanted_job]


