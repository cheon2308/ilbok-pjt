from django.contrib import admin
from django.urls import path
from jobdata import views

urlpatterns = [
    path('', views.jobList),
    path('test', views.job_info),
]