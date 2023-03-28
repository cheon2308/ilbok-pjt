from django.shortcuts import render
from django.db.models import Max
from .models import *
import numpy as np
from numpy import dot
from numpy.linalg import norm
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

# 코사인 유사도
def cos_sim(A, B):
    return dot(A, B) / (norm(A)*norm(B))

# 유저 특성 행렬화 시키기
def user_info():
    all_user = Users.objects.all()
    d = JobSubFamily.objects.all()
    jc = JobCategory.objects.all()
    c= Cities.objects.all()
    r = Regions.objects.all()

    return

def load_user_matrix(user_num):
    return 