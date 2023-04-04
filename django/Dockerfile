FROM python:3

RUN pip install django

WORKDIR /var/jenkins_home/workspace/django

COPY . .


RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install setuptools
RUN pip install scikit-learn

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

EXPOSE 80