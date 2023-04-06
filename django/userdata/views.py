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
import random
import time
from implicit.als import AlternatingLeastSquares
from sklearn import metrics
from multiprocessing import Process
from django.http import HttpRequest

# 도시 중분류
city_to_index = {11110: 144, 11140: 145, 11170: 146, 11200: 147, 11215: 148, 11230: 149, 11260: 150, 11290: 151, 11305: 152, 11320: 153, 11350: 154, 11380: 155, 11410: 156, 11440: 157, 11470: 158, 11500: 159, 11530: 160, 11545: 161, 11560: 162, 11590: 163, 11620: 164, 11650: 165, 11680: 166, 11710: 167, 11740: 168, 26110: 169, 26140: 170, 26170: 171, 26200: 172, 26230: 173, 26260: 174, 26290: 175, 26320: 176, 26350: 177, 26380: 178, 26410: 179, 26440: 180, 26470: 181, 26500: 182, 26530: 183, 26710: 184, 27110: 185, 27140: 186, 27170: 187, 27200: 188, 27230: 189, 27260: 190, 27290: 191, 27710: 192, 28110: 193, 28140: 194, 28177: 195, 28185: 196, 28200: 197, 28237: 198, 28245: 199, 28260: 200, 28710: 201, 28720: 202, 29110: 203, 29140: 204, 29155: 205, 29170: 206, 29200: 207, 30110: 208, 30140: 209, 30170: 210, 30200: 211, 30230: 212, 31110: 213, 31140: 214, 31170: 215, 31200: 216, 31710: 217, 36110: 218, 41110: 219, 41130: 220, 41150: 221, 41170: 222, 41190: 223, 41210: 224, 41220: 225, 41250: 226, 41270: 227, 41280: 228, 41290: 229, 41310: 230, 41360: 231, 41370: 232, 41390: 233, 41410: 234, 41430: 235, 41450: 236, 41460: 237, 41480: 238, 41500: 239, 41550: 240, 41570: 241, 41590: 242, 41610: 243, 41630: 244, 41650: 245, 41670: 246, 41800: 247, 41820: 248, 41830: 249, 42110: 250, 42130: 251, 42150: 252, 42170: 253, 42190: 254, 42210: 255, 42230: 256, 42720: 257, 42730: 258, 42750: 259, 42760: 260, 42770: 261, 42780: 262, 42790: 263, 42800: 264, 42810: 265, 42820: 266, 42830: 267, 43110: 268, 43130: 269, 43150: 270, 43720: 271, 43730: 272, 43740: 273, 43745: 274, 43750: 275, 43760: 276, 43770: 277, 43800: 278, 44130: 279, 44150: 280, 44180: 281, 44200: 282, 44210: 283, 44230: 284, 44250: 285, 44270: 286, 44710: 287, 44760: 288, 44770: 289, 44790: 290, 44800: 291, 44810: 292, 44825: 293, 45110: 294, 45130: 295, 45140: 296, 45180: 297, 45190: 298, 45210: 299, 45710: 300, 45720: 301, 45730: 302, 45740: 303, 45750: 304, 45770: 305, 45790: 306, 45800: 307, 46110: 308, 46130: 309, 46150: 310, 46170: 311, 46230: 312, 46710: 313, 46720: 314, 46730: 315, 46770: 316, 46780: 317, 46790: 318, 46800: 319, 46810: 320, 46820: 321, 46830: 322, 46840: 323, 46860: 324, 46870: 325, 46880: 326, 46890: 327, 46900: 328, 46910: 329, 47110: 330, 47130: 331, 47150: 332, 47170: 333, 47190: 334, 47210: 335, 47230: 336, 47250: 337, 47280: 338, 47290: 339, 47720: 340, 47730: 341, 47750: 342, 47760: 343, 47770: 344, 47820: 345, 47830: 346, 47840: 347, 47850: 348, 47900: 349, 47920: 350, 47930: 351, 47940: 352, 48120: 353, 48170: 354, 48220: 355, 48240: 356, 48250: 357, 48270: 358, 48310: 359, 48330: 360, 48720: 361, 48730: 362, 48740: 363, 48820: 364, 48840: 365, 48850: 366, 48860: 367, 48870: 368, 48880: 369, 48890: 370, 50110: 371, 50130: 372}
city_to_region = {11110: 11000, 11140: 11000, 11170: 11000, 11200: 11000, 11215: 11000, 11230: 11000, 11260: 11000, 11290: 11000, 11305: 11000, 11320: 11000, 11350: 11000, 11380: 11000, 11410: 11000, 11440: 11000, 11470: 
11000, 11500: 11000, 11530: 11000, 11545: 11000, 11560: 11000, 11590: 11000, 11620: 11000, 11650: 11000, 11680: 11000, 11710: 11000, 11740: 11000, 26110: 26000, 26140: 26000, 26170: 26000, 26200: 26000, 26230: 26000, 26260: 26000, 26290: 26000, 26320: 26000, 26350: 26000, 26380: 26000, 26410: 26000, 26440: 26000, 26470: 26000, 26500: 26000, 26530: 26000, 26710: 26000, 27110: 27000, 27140: 27000, 27170: 27000, 27200: 27000, 27230: 27000, 27260: 27000, 27290: 27000, 27710: 27000, 28110: 28000, 28140: 28000, 28177: 28000, 28185: 28000, 28200: 28000, 28237: 28000, 28245: 28000, 28260: 28000, 28710: 28000, 28720: 28000, 29110: 29000, 29140: 29000, 29155: 29000, 29170: 29000, 29200: 29000, 30110: 30000, 30140: 30000, 30170: 30000, 30200: 30000, 30230: 30000, 31110: 31000, 31140: 31000, 31170: 31000, 31200: 31000, 31710: 31000, 36110: 36110, 41110: 41000, 41130: 41000, 41150: 41000, 41170: 41000, 41190: 41000, 41210: 41000, 41220: 41000, 41250: 41000, 41270: 41000, 41280: 41000, 41290: 41000, 41310: 41000, 41360: 41000, 41370: 41000, 41390: 41000, 41410: 41000, 41430: 41000, 41450: 41000, 41460: 41000, 41480: 41000, 41500: 41000, 41550: 41000, 41570: 41000, 41590: 41000, 41610: 41000, 41630: 41000, 41650: 41000, 41670: 41000, 41800: 41000, 41820: 41000, 41830: 41000, 42110: 42000, 42130: 42000, 42150: 42000, 42170: 42000, 42190: 42000, 42210: 42000, 42230: 42000, 42720: 42000, 42730: 42000, 42750: 42000, 42760: 
42000, 42770: 42000, 42780: 42000, 42790: 42000, 42800: 42000, 42810: 42000, 42820: 42000, 42830: 42000, 43110: 43000, 43130: 43000, 43150: 43000, 43720: 43000, 43730: 43000, 43740: 43000, 43745: 43000, 43750: 43000, 43760: 43000, 43770: 43000, 43800: 43000, 44130: 44000, 44150: 44000, 44180: 44000, 44200: 44000, 44210: 44000, 44230: 44000, 44250: 44000, 44270: 44000, 44710: 44000, 44760: 44000, 44770: 44000, 44790: 44000, 44800: 44000, 44810: 44000, 44825: 44000, 45110: 45000, 45130: 45000, 45140: 45000, 45180: 45000, 45190: 45000, 45210: 45000, 45710: 45000, 45720: 45000, 45730: 45000, 45740: 45000, 45750: 45000, 45770: 45000, 45790: 45000, 45800: 45000, 46110: 46000, 46130: 46000, 46150: 46000, 46170: 46000, 46230: 46000, 46710: 46000, 46720: 46000, 46730: 46000, 46770: 46000, 46780: 46000, 46790: 46000, 46800: 46000, 46810: 46000, 46820: 46000, 46830: 46000, 46840: 46000, 46860: 46000, 46870: 46000, 46880: 46000, 46890: 46000, 46900: 46000, 46910: 46000, 47110: 47000, 47130: 47000, 47150: 47000, 47170: 47000, 47190: 47000, 47210: 47000, 47230: 47000, 47250: 47000, 47280: 47000, 47290: 47000, 47720: 47000, 47730: 47000, 47750: 47000, 47760: 47000, 47770: 47000, 47820: 47000, 47830: 47000, 47840: 47000, 47850: 47000, 47900: 47000, 47920: 47000, 47930: 47000, 47940: 47000, 48120: 48000, 48170: 48000, 48220: 48000, 48240: 48000, 48250: 48000, 48270: 48000, 48310: 48000, 48330: 48000, 48720: 48000, 48730: 
48000, 48740: 48000, 48820: 48000, 48840: 48000, 48850: 48000, 48860: 48000, 48870: 48000, 48880: 48000, 48890: 48000, 50110: 50000, 50130: 50000}
sub_to_index = {11: 14, 12: 15, 13: 16, 14: 17, 15: 18, 16: 19, 17: 20, 18: 21, 19: 22, 21: 23, 22: 24, 23: 25, 24: 26, 25: 27, 26: 28, 27: 29, 28: 30, 29: 31, 31: 32, 32: 33, 33: 34, 34: 35, 35: 36, 36: 37, 37: 38, 38: 39, 39: 40, 41: 41, 42: 42, 43: 43, 44: 44, 51: 45, 52: 46, 53: 47, 54: 48, 55: 49, 56: 50, 57: 51, 58: 52, 59: 53, 61: 54, 62: 55, 63: 56, 64: 57, 65: 58, 66: 59, 67: 60, 68: 61, 69: 62, 71: 63, 72: 64, 73: 65, 74: 66, 75: 67, 76: 68, 77: 69, 78: 70, 79: 71, 81: 72, 82: 73, 83: 74, 84: 75, 85: 76, 86: 77, 91: 78, 92: 79, 93: 80, 94: 81, 95: 82, 96: 83, 97: 84, 98: 85, 99: 86, 101: 87, 102: 88, 103: 89, 
104: 90, 105: 91, 106: 92, 107: 93, 111: 94, 112: 95, 113: 96, 114: 97, 115: 98, 116: 99, 117: 100, 118: 101, 119: 102, 121: 103, 122: 104, 123: 105, 124: 106, 125: 107, 126: 108, 131: 109, 132: 110, 133: 111, 134: 112, 135: 113, 140: 114, 141: 115, 142: 116, 143: 117, 240: 118, 241: 119, 242: 120, 640: 121, 740: 122, 741: 123, 940: 124, 1140: 125}
region_to_index = {0: 126, 11000: 127, 26000: 128, 27000: 129, 28000: 130, 29000: 131, 30000: 132, 31000: 133, 36110: 134, 41000: 135, 42000: 136, 43000: 137, 44000: 138, 45000: 139, 46000: 140, 47000: 141, 48000: 142, 50000: 143}

# 코사인 유사도
def cos_sim(A, B):
    return dot(A, B) / (norm(A)*norm(B))

# 유저 -> 채용공고에 평점매기기
@api_view(['GET'])
def user_to_job(request):
    start = time.time()
    # 데이터를 배열로 변환하지 않고 딕셔너리 형태로 불러옴
    ap_job = ApplyStatus.objects.values_list('user_id', 'wanted_code__wanted_code')
    cl_job = ClickWanted.objects.values_list('user_id', 'wanted_code__wanted_code')
    li_job = LikeWanted.objects.values_list('user_id', 'wanted_code__wanted_code')
    userMatrix = np.load('./data/user_to_job.npy')

    # 우선 전체 유저의 수, 전체 공고의 수 구하기
    # 행번호 -> 유저 번호, 열 번호 -> 공고 번호
    user_length = Users.objects.aggregate(Max('user_id'))
    job_length = Wanted.objects.aggregate(Max('wanted_code'))
    len_col = len(userMatrix[0])
    len_row = len(userMatrix)
    # column 추가
    # 새로 추가될 column과 row 크기 구하기
    new_col = job_length['wanted_code__max'] - len_col + 1
    new_row = user_length['user_id__max'] - len_row + 1

    # 새로운 column 만들기
    # row 추가
    if new_row > 0:
        ap_row = np.zeros((1, job_length['wanted_code__max']+1))
        for _ in range(user_length['user_id__max'] - len_row + 1):
            userMatrix = np.append(userMatrix, ap_row, axis=0)
    if new_col > 0:
        zeros = np.zeros((len_row, new_col))
        userMatrix = np.hstack((userMatrix, zeros))

    # 벡터에 가중치 주기 -> 지원 3점, 클릭 1점, 북마크 2점
    userMatrix[np.array(ap_job).T] += 10
    userMatrix[np.array(cl_job).T] += 1
    userMatrix[np.array(li_job).T] += 5
    np.save('./data/user_to_job', userMatrix)
    end = time.time()
    print(end - start)
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

# AUC 계산0
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
    mat = np.load('./data/user_to_job.npy')
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
    try:
        user_item_matrix = np.load('./data/rec_user_to_job.npy')

        user_vector = user_item_matrix[user_id, :]
        item_idx = np.argsort(-user_vector)[:200]
        recommended_items = [idx for idx in item_idx]
        return Response(recommended_items)
    except:
        result = random.sample(range(1, 3500), 200)
        return Response(result)

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
@api_view(['GET'])
def user_info(request):
    all_user = Users.objects.values('user_id','degree_code', 'city_code', 'favorite', 'age','gender')
    # 유저경력 변수
    career = Careers.objects.all()

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
        userMatrix[user_num][sub_to_index[job_num]] = car.period


    # 유저 정보에 대해 matrix에 기록
    for us in all_user:
        # 이력서 작성한 사람에 한해 
        if us['city_code']:
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
    np.save('./data/userMatrix', userMatrix)

    # 유사도로 저장해주기
    calc_sim_user = cosine_similarity(userMatrix, userMatrix)
    
    sorted_index = np.argsort(calc_sim_user)[:, ::-1]
    sorted_index = sorted_index[:, 1:]
    # 유저간 유사도
    np.save('./data/userToUser', sorted_index)
    return Response(sorted_index)


# 신규유저 행렬에 추가
@api_view(['GET'])
def update_user_matrix(request, user_id):
    try:
        user_matrix = np.load('./data/userMatrix.npy')
        all_user = Users.objects.values('user_id','degree_code', 'city_code', 'favorite', 'age','gender')
        # count 
        # 추가가 안됨 - 반복문 추가안됨
        # career 만들어주기
        # 행렬 인덱스화 시키는거 파일화
        # 저장 을 여기서?
        user_length = all_user.aggregate(Max('user_id'))
        now_arr = len(user_matrix)
        new_row = np.zeros((1, 384))
        for _ in range(user_length['user_id__max'] - now_arr + 1):
            user_matrix = np.append(user_matrix, new_row, axis=0)
        # 경력 기록
        career = Careers.objects.all()
        user_career = career.filter(user_id=user_id)
        for uc in user_career:
            user_matrix[user_id][sub_to_index[uc.sub_code.job_sub_code]] += 2
        # 이력서 저장한 사람 id 불러오기
        us = Users.objects.get(user_id=user_id)
        # 이력서 작성한 사람에 한해 
        us_num = us.user_id
        fav = us.favorite.job_sub_code
        us_city = us.city_code.city_code
        deg = us.degree_code.degree_id
        us_age = us.age
        us_gen = us.gender


        # 유저 관심 직종 +3 해주기
        user_matrix[us_num][sub_to_index[fav]] += 3
        # 지역 +1 해주기
        user_matrix[us_num][city_to_index[us_city]] += 1
        user_matrix[us_num][region_to_index[city_to_region[us_city]]] += 1
        # 학력 기록해주기
        if deg == 0:
            user_matrix[us_num][373:377] = [0,0,0,0]
        elif deg == 4:
            user_matrix[us_num][373:377] = [0,0,0,1]
        elif deg == 5:
            user_matrix[us_num][373:377] = [0,0,1,1]
        elif deg == 6:
            user_matrix[us_num][373:377] = [0,1,1,1]
        elif deg == 7:
            user_matrix[us_num][373:377] = [1,1,1,1]
        # 나이 기록해주기
        if us_age < 55:        
            user_matrix[us_num][378] = 1
        elif 55 <= us_age < 60:
            user_matrix[us_num][379] = 1
        elif 60 <= us_age < 65:
            user_matrix[us_num][380] = 1
        elif 65 <= us_age:
            user_matrix[us_num][381] = 1

        # 성별 - 남 1 여 2
        if us_gen == 0:
            user_matrix[us_num][382] = 1
        else:
            user_matrix[us_num][383] = 1
        start = time.time()
        # 유저 매트릭스로 저장
        np.save('./data/userMatrix.npy', user_matrix)
        # 유사도로 저장해주기
        calc_sim_user = cosine_similarity(user_matrix, user_matrix)
        
        sorted_index = np.argsort(calc_sim_user)[:, ::-1]
        sorted_index = sorted_index[:, 1:]
        # 유저간 유사도
        np.save('./data/userToUser.npy', sorted_index)
        end = time.time()
        print(end - start)
        return Response(True)
    except:
        
        return Response('실패')


# 유저간 유사도 기반 공고 추천하기
@api_view(['GET'])
def rec_cf_user(request, user_id):
    try:
        user_list = np.load('./data/userToUser.npy')
        print(len(user_list))
        rec_user = user_list[user_id][:5]
        user_item_matrix = np.load('./data/user_to_job.npy')
        print(len(user_item_matrix))
        res_data = []
        for i in rec_user:
            user_vector = user_item_matrix[i, :]
            item_idx = np.argsort(-user_vector)[:10]
            for j in item_idx:
                res_data.append((j, user_list[user_id][i] * user_item_matrix[i][j]))
            
            res_data.sort(key=lambda x:x[1], reverse=True)
        
        result = []
        for k in res_data:
            if k[0] not in result:
                result.append(k[0])
        return Response(result)
    except:
        result = random.sample(range(1, 3500), 200)
        return Response(result)

