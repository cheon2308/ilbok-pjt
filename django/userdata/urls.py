from django.contrib import admin
from django.urls import path
from userdata import views


app_name = 'userdata'
urlpatterns = [
    path('makeusermatrix', views.user_info),
    path('<int:user_num>', views.load_user_matrix ),
    # path('data/<int:wanted_job_num>', views.similar_job )
]