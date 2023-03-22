from django.shortcuts import render
from .models import *
import numpy as np
from numpy import dot
from numpy.linalg import norm
# Create your views here.

# 
# def jobCodeMatch(request):
#     job_cat

def jobList(request):
    families = Wanted.objects.all()
    jobCode = set()
    for i in families:
        jobCode.add(i.job_code)
    return render(request, 'index.html', {"families": families})

# 코사인 유사도
def cos_sim(A, B):
    return dot(A, B) / (norm(A)*norm(B))

def job_to_job(request):
    dataset = All_in_one.objects.all()
    print(dataset,333333333333333333333)
    return render(request, 'test.html', {"dataset": dataset})

doc1 = np.array([0,1,1,1])
doc2 = np.array([1,0,1,1])
doc3 = np.array([2,0,2,2])

print('문서 1과 문서2의 유사도 :',cos_sim(doc1, doc2))
print('문서 1과 문서3의 유사도 :',cos_sim(doc1, doc3))
print('문서 2와 문서3의 유사도 :',cos_sim(doc2, doc3))
print(norm(doc3))