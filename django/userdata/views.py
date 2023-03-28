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
    all_user = Users.objects.values('degree_code', 'city_code', 'favorite', 'age','gender')
    js = JobSubFamily.objects.all()
    jc = JobCategory.objects.all()
    c= Cities.objects.all()
    r = Regions.objects.all()

    # 직업 중분류 - 행렬 인덱스 매칭
    sub_to_index = {}
    for i in range(len(js)):
        sub_to_index[js[i].code] = i+14

    # 지역 - 행렬 인덱스 매칭
    city_to_region = {}
    city_to_index = {}
    region_to_index = {}

    i = 126
    for k in r:
        region_to_index[k.code] = i
        i += 1
    
    print(region_to_index)
    # city - region 매칭
    # city - 행렬 인덱스 매칭
    for j in range(len(c)):
        city_to_region[c[j].code] = c[j].region_code.code
        city_to_index[c[j].code] = j + 144

    print(city_to_index)

    # degree - 행렬 인덱스 매칭
    # degree_행렬 1개 넣어주기

    return
user_info()

def load_user_matrix(user_num):
    return 