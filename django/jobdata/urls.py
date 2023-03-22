from django.contrib import admin
from django.urls import path
from jobdata import views

urlpatterns = [
    path('family/', views.job_family),
]