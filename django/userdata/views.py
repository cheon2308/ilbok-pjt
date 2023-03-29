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

# 유저 특성 행렬화 시키기
def user_info():
    all_user = Users.objects.values('user_id','degree_code', 'city_code', 'favorite', 'age','gender')
    
    # job 코드 변수
    js = JobSubFamily.objects.all()
    jc = JobCategory.objects.all()
    # 지역변수
    city = Cities.objects.all()
    region = Regions.objects.all()
    
    # 유저경력 변수
    career = Careers.objects.all()

    # 직업 중분류 - 행렬 인덱스 매칭
    sub_to_index = {}
    for i in range(len(js)):
        sub_to_index[js[i].code] = i+14

    # 지역 - 행렬 인덱스 매칭
    city_to_region = {}
    city_to_index = {}
    region_to_index = {}

    i = 126
    for k in region:
        region_to_index[k.code] = i
        i += 1
    
    # city - region 매칭
    # city - 행렬 인덱스 매칭
    for j in range(len(city)):
        city_to_region[city[j].code] = city[j].region_code.code
        city_to_index[city[j].code] = j + 144

    #######################################################
    # 행렬만들기
    # 전체 열 개수 384개

    # 우선 전체 유저의 수 구하기
    user_length = all_user.aggregate(Max('user_id'))
    userMatrix = [[0]*384 for _ in range(user_length['user_id__max']+1)]

    # 경력에 대해 matrix에 기록해주기
    # 학력 - 373 4 5 6
    # 나이 - 378 9 380 381
    # 성별 - 382 383

    for car in career:
        user_num = car.user_id
        job_num = car.sub_code.code
        # 1년은 +1
        if car.period == 1:
            userMatrix[user_num][sub_to_index[job_num]] += 1
        # 2,3년은 +2
        elif car.period == 2 or car.period == 3:
            userMatrix[user_num][sub_to_index[job_num]] += 2
        # 4,5녀는 +3
        elif car.period == 4 or car.period == 5:
            userMatrix[user_num][sub_to_index[job_num]] += 3

    # 유저 정보에 대해 matrix에 기록
    for us in all_user:
        # 이력서 작성한 사람에 한해 
        if us['degree_code']:
            us_num = us['user_id']
            fav = us['favorite']
            us_city = us['city_code']
            deg = us['degree_code']
            us_age = us['age']
            us_gen = us['gender']
        else:
            continue

        # 유저 관심 직종 +3 해주기
        userMatrix[us_num][sub_to_index[fav]] += 3

        # 지역 +1 해주기
        userMatrix[us_num][city_to_index[us_city]] += 1
        userMatrix[us_num][region_to_index[city_to_region[us_city]]] += 1

        # 학력 기록해주기
        if deg == 0:
            userMatrix[us_num][373:377] = [0,0,0,0]
        elif deg == 4:
            userMatrix[us_num][373:377] = [0,0,0,1]
        elif deg == 5:
            userMatrix[us_num][373:377] = [0,0,1,1]
        elif deg == 6:
            userMatrix[us_num][373:377] = [0,1,1,1]
        elif deg == 7:
            userMatrix[us_num][373:377] = [1,1,1,1]

        # 나이 기록해주기
        if us_age < 55:        
            userMatrix[us_num][378] = 1
        elif 55 <= us_age < 60:
            userMatrix[us_num][379] = 1
        elif 60 <= us_age < 65:
            userMatrix[us_num][380] = 1
        elif 65 <= us_age:
            userMatrix[us_num][381] = 1


        # 성별 - 남 1 여 2
        if us_gen == 0:
            userMatrix[us_num][382] = 1
        else:
            userMatrix[us_num][383] = 1

    # 유저 매트릭스로 저장
    # np.save('./data/userMatrix', userMatrix)

    # 유사도로 저장해주기
    calc_sim_user = cosine_similarity(userMatrix, userMatrix)
    print(np.sort(calc_sim_user))
    sorted_index = np.argsort(calc_sim_user)[:, ::-1]
    sorted_index = sorted_index[:, 1:]

    return

user_info()

def load_user_matrix(user_num):
    return 