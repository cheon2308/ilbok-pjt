from django.contrib import admin
from django.urls import path
from jobdata import views


app_name = 'jobdata'
urlpatterns = [
    # 위 2개 작동안됨
    # 리스트가 get 을 얻을 수 없다함 response로 변경해볼것
    path('makejobmatrix', views.job_info),
    path('sortjobmatrix', views.job_sort),
    path('<int:wanted_job_num>', views.load_sim_job ),
    path('data/<int:wanted_job_num>', views.similar_job )
]