from django.shortcuts import render
from .models import JobFamily
# Create your views here.

def job_family(request):
    families = JobFamily.objects.all()
    return render(request, 'index.html', {"families": families})