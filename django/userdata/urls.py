from django.contrib import admin
from django.urls import path
from userdata import views


app_name = 'userdata'
urlpatterns = [
    path('makeusermatrix', views.user_info),
    # 이미 본 공고 포함 추천받기
    path('<int:user_id>', views.recommend_items_for_user ),
    # 이미 본 공고 제외 추천받기
    path('except/<int:user_id>', views.recommend_items ),
    # 로그 쌓인 후 행렬 업데이트
    path('update', views.user_train),
    # auc 커브로 성능확인하기
    path('auc', views.check_calc_mean),

]