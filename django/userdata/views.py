from django.shortcuts import render
from django.db.models import Max
from .models import *
import numpy as np
from numpy import dot
from numpy.linalg import norm
import pandas as pd
from scipy import sparse
from sklearn.metrics.pairwise import cosine_similarity
from rest_framework.response import Response
from rest_framework.decorators import api_view
from scipy.sparse.linalg import spsolve
import random
from time import time
from implicit.als import AlternatingLeastSquares
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import MinMaxScaler


# 코사인 유사도
def cos_sim(A, B):
    return dot(A, B) / (norm(A)*norm(B))

# 유저 -> 채용공고에 평점매기기
def user_to_job():
    ap_job = ApplyStatus.objects.all()
    cl_job = ClickWanted.objects.all()
    li_job = LikeWanted.objects.all()

    # 우선 전체 유저의 수, 전체 공고의 수 구하기
    # 행번호 -> 유저 번호, 열 번호 -> 공고 번호
    user_length = Users.objects.aggregate(Max('user_id'))
    job_length = Wanted.objects.aggregate(Max('wanted_code'))
    userMatrix = np.array([[0]*(job_length['wanted_code__max']+1) for _ in range(user_length['user_id__max']+1)])

    # 벡터에 가중치 주기 -> 지원 3점, 클릭 1점, 북마크 2점
    for a in ap_job:
        userMatrix[a.user_id][a.wanted_code.wanted_code] += 5
    
    for c in cl_job:
        userMatrix[c.user_id][c.wanted_code.wanted_code] += 1
    
    for l in li_job:
        userMatrix[l.user_id][l.wanted_code.wanted_code] += 3

    # np.save('./data/user_to_job', userMatrix)
    return userMatrix

## 훈련 데이터 만들기

def make_train( matrix, percentage = .2):
    '''
    ----------------------------------------------------
    설명
    유저-아이템 행렬 (matrix)에서 
    1. 0 이상의 값을 가지면 1의 값을 갖도록 binary하게 테스트 데이터를 만들고
    2. 훈련 데이터는 원본 행렬에서 percentage 비율만큼 0으로 바뀜
    
    -----------------------------------------------------
    반환
    training_set: 훈련 데이터에서 percentage 비율만큼 0으로 바뀐 행렬
    test_set:     원본 유저-아이템 행렬의 복사본
    user_inds:    훈련 데이터에서 0으로 바뀐 유저의 index

    '''
    # 선호도 행렬 P
    test_set = matrix.copy()
    test_set[test_set != 0] = 1 # binary하게 만들기
    # print(test_set)
    training_set = matrix.copy()
    nonzero_inds = training_set.nonzero()
    nonzero_pairs = list(zip(nonzero_inds[0], nonzero_inds[1]))

    random.seed(0)
    num_samples = int(np.ceil(percentage * len(nonzero_pairs)))
    samples = random.sample(nonzero_pairs, num_samples)

    user_inds = [index[0] for index in samples]
    item_inds = [index[1] for index in samples]

    training_set[user_inds, item_inds] = 0
    training_set.eliminate_zeros()

    return training_set, test_set, list(set(user_inds))


# 아래 함수를 helper로 써서 가려진 유저들의 AUC를 계산할 것
def auc_score(test, predictions):
    '''
    fpr, tpr를 이용해서 AUC를 계산하는 함수
    '''
    fpr, tpr, thresholds = metrics.roc_curve(test, predictions)
    return metrics.auc(fpr,tpr)

# AUC 계산
def calc_mean_auc(training_set, altered_users, predictions, test_set):

    '''
    가려진 정보가 있는 유저마다 AUC 평균을 구하는 함수
    ----------------------------------------
    input
    1. training_set: make_train 함수에서 만들어진 훈련 데이터 (일정 비율로 아이템 구매량이 0으로 가려진 데이터)
    2. prediction: implicit MF에서 나온 유저/아이템 별로 나온 예측 평점 행렬
    3. altered_users: make_train 함수에서 아이템 구매량이 0으로 가려진 유저
    4. test_set: make_train함수에서 만든 테스트 데이터
    ----------------------------------------
    반환
    추천 시스템 유저의 평균 auc
    인기아이템 기반 유저 평균 auc
    '''

    # 리스트 초기화
    store_auc = []
    popularity_auc = []
    
    pop_items = np.array(test_set.sum(axis = 0)).reshape(-1) # 모든 유저의 아이템별 구매횟수 합
    item_vecs = predictions[1] # 아이템 latent 벡터
    
    for user in altered_users:
        training_row = training_set[user,:].toarray().reshape(-1) # 유저의 훈련데이터
        zero_inds = np.where(training_row == 0) # 가려진 아이템 Index
        
        # 가려진 아이템에 대한 예측
        user_vec = predictions[0][user,:]
        pred = user_vec.dot(item_vecs).toarray()[0,zero_inds].reshape(-1)
        
        # 가려진 아이템에 대한 실제값
        actual = test_set[user,:].toarray()[0,zero_inds].reshape(-1) 
        
        # 가려진 아이템에 대한 popularity (구매횟수 합)
        pop = pop_items[zero_inds]
        
        # AUC 계산 
        store_auc.append(auc_score(actual, pred))
        popularity_auc.append(auc_score(actual,pop))

    return float('%.3f'%np.mean(store_auc)), float('%.3f'%np.mean(popularity_auc))  

# AUC 계산 위한 평가 지표들
@api_view(['GET'])
def check_calc_mean(request):
     # 모든 유저와 아이템 간의 예측 평점이 계산됨
    mat = user_to_job()
    csr = sparse.csr_matrix(mat)
    product_train, product_test, product_users_altered = make_train(csr, 0.2)
    # 라이브러리로 ALS 돌리기
    # 모델 학습
    als_model = AlternatingLeastSquares(factors=20, regularization=0.01, iterations=50, alpha=40)
    als_model.fit(product_train)
    # 모델로부터 유저 및 아이템 특징 벡터 행렬 획득
    user_vector = als_model.user_factors
    item_vector = als_model.item_factors
    # 성능 평가
    predictions = [sparse.csr_matrix(user_vector), sparse.csr_matrix(item_vector.T)]
    print(calc_mean_auc(product_train, product_users_altered, predictions, product_test))
    return Response(calc_mean_auc(product_train, product_users_altered, predictions, product_test))


# 모델 학습 + 유저 - 아이템 행렬 예측값 계산 후 저장
# 로그 쌓여서 업데이트시 실행해줄 함수
@api_view(['GET'])
def user_train(request):
    # 모든 유저와 아이템 간의 예측 평점이 계산됨
    mat = user_to_job()
    csr = sparse.csr_matrix(mat)
    product_train, product_test, product_users_altered = make_train(csr, 0.2)

    # 라이브러리로 ALS 돌리기
    # 모델 학습
    als_model = AlternatingLeastSquares(factors=20, regularization=0.01, iterations=50, alpha=40)
    als_model.fit(product_train)
    # 학습된 ALS 모델을 사용하여 유저-아이템 행렬의 예측값 계산
    user_factors = als_model.user_factors
    item_factors = als_model.item_factors
    user_item_matrix = user_factors.dot(item_factors.T)
    np.save('./data/rec_user_to_job', user_item_matrix)
    
    return Response('success')

# 유저별로 상위 n개 추천
# 이미 본 공고도 같이 보내는 함수
# 이미 계산된 결과 사용
@api_view(['GET'])
def recommend_items_for_user(request, user_id):
    user_item_matrix = np.load('./data/rec_user_to_job.npy')
    user_vector = user_item_matrix[user_id, :]
    print(user_vector)
    item_idx = np.argsort(-user_vector)[:200]
    recommended_items = [idx for idx in item_idx]
    return Response(recommended_items)

# 추천 함수 -> 유저가 보지 않은 데이터로만 보냄
def recommend_items(request, user_id):
    ## 훈련, 테스트 데이터 생성
    mat = np.load('./data/rec_user_to_job.npy')
    csr = sparse.csr_matrix(mat)
    product_train, product_test, product_users_altered = make_train(csr, 0.2)

    # 라이브러리로 ALS 돌리기
    # 모델 학습
    als_model = AlternatingLeastSquares( factors=50, regularization=0.01, iterations=50)
    als_model.fit(product_train)
    # 학습된 ALS 모델을 사용하여 유저-아이템 행렬의 예측값 계산
    user_factors = als_model.user_factors
    item_factors = als_model.item_factors
    user_item_matrix = user_factors.dot(item_factors.T)
    # 모델로부터 유저 및 아이템 특징 벡터 행렬 획득
    user_vector = als_model.user_factors
    item_vector = als_model.item_factors

    # 유저가 본 공고 목록 획득
    user_click = user_item_matrix[user_id].indices

    # 유저가 아직 보지않은 공고 목록 획득
    all_jobs=np.arange(user_item_matrix.shape[1])
    non_user_jobs = np.setdiff1d(all_jobs, user_click)

    # 유저-상품 간 코사인 유사도 계산
    user_vec = user_vector[user_id]
    sim_scores = item_vector[non_user_jobs].dot(user_vec)
    
    # 유사도를 기준으로 내림차순으로 정렬하여 상위 num_items개의 아이템 추출
    best_items = non_user_jobs[np.argsort(-sim_scores)[:30]]
    return best_items




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
        sub_to_index[js[i].job_sub_code] = i+14

    # 지역 - 행렬 인덱스 매칭
    city_to_region = {}
    city_to_index = {}
    region_to_index = {}

    i = 126
    for k in region:
        region_to_index[k.region_code] = i
        i += 1
    
    # city - region 매칭
    # city - 행렬 인덱스 매칭
    for j in range(len(city)):
        city_to_region[city[j].city_code] = city[j].region_code.region_code
        city_to_index[city[j].city_code] = j + 144


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
        job_num = car.sub_code.job_sub_code
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
    sorted_index = np.argsort(calc_sim_user)[:, ::-1]
    sorted_index = sorted_index[:, 1:]
    print(sorted_index)
    # 유저간 유사도
    np.save('./user_to_user', sorted_index)
    return

