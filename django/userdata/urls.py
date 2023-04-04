from django.contrib import admin
from django.urls import path
from userdata import views


app_name = 'userdata'
urlpatterns = [
    
    # 이미 본 공고 포함 추천받기
    path('als/<int:user_id>', views.recommend_items_for_user ),
    # 이미 본 공고 제외 추천받기
    path('except/<int:user_id>', views.recommend_items ),
    # 로그 쌓인 후 행렬 업데이트
    path('update/log', views.user_train),
    # 신규 유저, cold start 시 이력서 바탕으로 해주기
    # 유저 - 유저간 행렬 업데이트 시켜주고 cold start 호출
    # 이후 업데이트
    path('update/<int:user_id>', views.update_user_matrix),
    path('cf/<int:user_id>', views.rec_cf_user),
    # 사용 x
    # auc 커브로 성능확인하기
    path('auc', views.check_calc_mean),
    path('update/usertouser', views.user_info),
]