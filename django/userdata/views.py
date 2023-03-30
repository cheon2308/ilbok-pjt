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
from sklearn.preprocessing import MinMaxScaler
# Create your views here.
from time import time

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
    return

def load_user_matrix(user_num):
    return 



# 유저 -> 채용공고에 평점매기기
def user_to_job():
    ap_job = ApplyStatus.objects.all()
    cl_job = ClickWanted.objects.all()
    li_job = LikeWanted.objects.all()

    # 우선 전체 유저의 수, 전체 공고의 수 구하기
    # 행번호 -> 유저 번호, 열 번호 -> 공고 번호
    user_length = Users.objects.aggregate(Max('user_id'))
    job_length = Wanted.objects.aggregate(Max('wanted_code'))
    userMatrix = [[0]*(job_length['wanted_code__max']+1) for _ in range(user_length['user_id__max']+1)]

    # 벡터에 가중치 주기 -> 지원 3점, 클릭 1점, 북마크 2점
    for a in ap_job:
        userMatrix[a.user_id][a.wanted_code.wanted_code] += 3
    
    for c in cl_job:
        userMatrix[c.user_id][c.wanted_code.wanted_code] += 1
    
    for l in li_job:
        userMatrix[l.user_id][l.wanted_code.wanted_code] += 2

    np.save('./data/user_to_job', userMatrix)
    return


# csr 행렬로 변환해주기
def csr_matrix():
    mat = np.load('./data/user_to_job.npy')
    csr = sparse.csr_matrix(mat)
    # 행렬 사이즈
    matrix_size = csr.shape[0]* csr.shape[1]
    print(matrix_size)
    # 유효한 데이터
    num_active = len(csr.nonzero()[0])
    print(num_active)
    # 0이 들어있는 퍼센트
    sparsity = 100 * (1-(num_active/matrix_size))
    print(sparsity)
    return



## 훈련 데이터 만들기

def make_train(matrix, percentage = .2):

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
    test_set = matrix.copy()
    test_set[test_set != 0] = 1 # binary하게 만들기


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


# 훈련, 테스트 데이터 생성
mat = np.load('./data/user_to_job.npy')
csr = sparse.csr_matrix(mat)
product_train, product_test, product_users_altered = make_train(csr, 0.2)


def implicit_weighted_ALS(training_set, lambda_val = .1, alpha = 40, n_iter=10, rank_size = 20, seed = 0):
    '''
    협업 필터링에 기반한 ALS
    -----------------------------------------------------
    input
    1. training_set : m x n 행렬로, m은 유저 수, n은 아이템 수를 의미. csr 행렬 (희소 행렬) 형태여야 함 
    2. lambda_val: ALS의 정규화 term. 이 값을 늘리면 bias는 늘지만 분산은 감소. default값은 0.1
    3. alpha: 신뢰 행렬과 관련한 모수 (C_{ui} = 1 + alpha * r_{ui}). 이를 감소시키면 평점 간의 신뢰도의 다양성이 감소
    4. n_iter: 반복 횟수
    5. rank_size: 유저/ 아이템 특성 벡터의 잠재 특성의 개수. 논문에서는 20 ~ 200 사이를 추천하고 있음. 이를 늘리면 과적합 위험성이 있으나 
    bias가 감소
    6. seed: 난수 생성에 필요한 seed
    -----------------------------------------------------
    반환
    유저와 아이템에 대한 특성 벡터
    '''
    start = time()
    # 1. Confidence matrix
    # C = 1+ alpha * r_{ui}
    conf = (alpha*training_set)  # sparse 행렬 형태를 유지하기 위해서 1을 나중에 더함

    num_user = conf.shape[0]
    num_item = conf.shape[1]

    # X와 Y 초기화
    rstate = np.random.RandomState(seed)
    X = sparse.csr_matrix(rstate.normal(size = (num_user, rank_size)))
    Y = sparse.csr_matrix(rstate.normal(size = (num_item, rank_size)))
    X_eye = sparse.eye(num_user)
    Y_eye = sparse.eye(num_item)
    
    # 정규화 term: 𝝀I
    lambda_eye = lambda_val * sparse.eye (rank_size)
    
    # 반복 시작
    for i in range(n_iter):
        yTy = Y.T.dot(Y)
        xTx = X.T.dot(X)
        
        # Y를 고정해놓고 X에 대해 반복
        # Xu = (yTy + yT(Cu-I)Y + 𝝀I)^{-1} yTCuPu
        for u in range(num_user):
            conf_samp = conf[u,:].toarray() # Cu
            pref = conf_samp.copy()
            pref[pref!=0] = 1
            # Cu-I: 위에서 conf에 1을 더하지 않았으니까 I를 빼지 않음 
            CuI = sparse.diags(conf_samp, [0])
            # yT(Cu-I)Y
            yTCuIY = Y.T.dot(CuI).dot(Y)
            # yTCuPu
            yTCupu = Y.T.dot(CuI+Y_eye).dot(pref.T)
            
            X[u] = spsolve(yTy + yTCuIY + lambda_eye, yTCupu)
        
        # X를 고정해놓고 Y에 대해 반복
        # Yi = (xTx + xT(Cu-I)X + 𝝀I)^{-1} xTCiPi
        for i in range(num_item):
            conf_samp = conf[:,i].T.toarray()
            pref = conf_samp.copy()
            pref[pref!=0] = 1
            
            #Ci-I
            CiI = sparse.diags (conf_samp, [0])
            # xT(Ci-I)X
            xTCiIX = X.T.dot(CiI).dot(X)
            # xTCiPi
            xTCiPi = X.T.dot(CiI+ X_eye).dot(pref.T)
            
            Y[i] = spsolve(xTx + xTCiIX + lambda_eye, xTCiPi)
        end = time()
        print(end-start)
        return X, Y.T
    

user_vecs, item_vecs = implicit_weighted_ALS(product_train, lambda_val = 0.1, alpha = 15, n_iter= 1,rank_size = 20, seed=0)
