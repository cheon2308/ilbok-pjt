from django.contrib import admin
from django.urls import path
from jobdata import views


app_name = 'jobdata'
urlpatterns = [
    path('makejobmatrix', views.job_info),
    path('<int:wanted_job_num>', views.load_sim_job ),
    path('data/<int:wanted_job_num>', views.similar_job )
]