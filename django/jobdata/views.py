from django.shortcuts import render
from .models import *
import numpy as np
from numpy import dot
from numpy.linalg import norm
# Create your views here.

# 
# def jobCodeMatch(request):
#     job_cat

def jobList(request):
    families = Wanted.objects.all()
    return render(request, 'index.html', {"families": families})

# 코사인 유사도
def cos_sim(A, B):
    return dot(A, B) / (norm(A)*norm(B))

def job_info(request):
    dataset = All_in_one.objects.values('wanted_code', 'job_family_code', 'job_sub_code', 'job_code')
    all_job = Wanted.objects.all()
    d = JobSubFamily.objects.all()
    r = Cities.objects.all()
    c = Regions.objects.all()

    # 직업 - 중분류 행렬인덱스 매칭
    sub_to_index = {}
    for i in range(len(d)):
        sub_to_index[d[i].code] = i+14

    # 지역 행렬 인덱스 매칭
    city_to_region = {}
    region_to_index = {}

    i = 126
    for k in c:
        region_to_index[k.code] = i
        i += 1
    # city - region 매칭
    for j in range(len(r)):
        city_to_region[r[j].code] = r[j].region_code.code


    test_data = all_in_one()
    # 행렬 만들기
    jobMatrix = [[0]*144 for _ in range(len(all_job)+2)]
    for da in test_data:
        q = da['wanted_code']
        w = da['job_family_code']
        e = da['job_sub_code']
        # print(da)
        jobMatrix[q][w] = 1
        jobMatrix[q][sub_to_index[e]] = 1
    
    recom = []
    for u in range(1,len(jobMatrix)):
        if u != 1:
            recom.append((cos_sim(jobMatrix[1], jobMatrix[u]), u))
    recom.sort(reverse=True)
    
    
    #### 뽑고 정보를 뽑을 dict 생성 혹은 job 번호 넣어주면 바로 뽑을 수 있게 하기
    for i in recom[:5]:
        print(i)
    return render(request, 'test.html', {"dataset": dataset})

def all_in_one():
    dataset = All_in_one.objects.values('wanted_code', 'job_family_code', 'job_sub_code', 'job_code')
    return dataset


doc1 = np.array([1, 1])
doc2 = np.array([4, 3])
doc3 = np.array([3, 0])
