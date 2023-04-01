# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class ApplyStatus(models.Model):
    code = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    wanted_code = models.ForeignKey('Wanted', models.DO_NOTHING, db_column='wanted_code')

    class Meta:
        managed = False
        db_table = 'apply_status'


class Careers(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)
    sub_code = models.ForeignKey('JobSubFamily', models.DO_NOTHING, db_column='sub_code', blank=True, null=True)
    period = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'careers'


class Cities(models.Model):
    city_code = models.IntegerField(primary_key=True)
    region_code = models.ForeignKey('Regions', models.DO_NOTHING, db_column='region_code')
    city = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cities'


class ClickWanted(models.Model):
    code = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    wanted_code = models.ForeignKey('Wanted', models.DO_NOTHING, db_column='wanted_code')

    class Meta:
        managed = False
        db_table = 'click_wanted'


class Degrees(models.Model):
    degree_id = models.IntegerField(primary_key=True)
    degree = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'degrees'


class JobCategory(models.Model):
    code = models.AutoField(primary_key=True)
    job_code = models.ForeignKey('Jobs', models.DO_NOTHING, db_column='job_code', blank=True, null=True)
    job_sub_code = models.ForeignKey('JobSubFamily', models.DO_NOTHING, db_column='job_sub_code', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_category'


class JobFamily(models.Model):
    job_family_code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_family'


class JobSubFamily(models.Model):
    job_sub_code = models.IntegerField(primary_key=True)
    job_family_code = models.ForeignKey(JobFamily, models.DO_NOTHING, db_column='job_family_code')
    name = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_sub_family'


class Jobs(models.Model):
    job_code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'jobs'


class LikeWanted(models.Model):
    code = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    wanted_code = models.ForeignKey('Wanted', models.DO_NOTHING, db_column='wanted_code')

    class Meta:
        managed = False
        db_table = 'like_wanted'


class Regions(models.Model):
    region_code = models.IntegerField(primary_key=True)
    region = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'regions'


class Users(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    degree_code = models.ForeignKey(Degrees, models.DO_NOTHING, db_column='degree_code', blank=True, null=True)
    city_code = models.ForeignKey(Cities, models.DO_NOTHING, db_column='city_code', blank=True, null=True)
    favorite = models.ForeignKey(JobSubFamily, models.DO_NOTHING, db_column='favorite', blank=True, null=True)
    kakao_id = models.BigIntegerField()
    email = models.CharField(max_length=45)
    nickname = models.CharField(max_length=80)
    age = models.IntegerField(blank=True, null=True)
    gender = models.IntegerField(blank=True, null=True)
    profile_image = models.CharField(max_length=550, blank=True, null=True)
    user_role = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'


class Wanted(models.Model):
    wanted_code = models.AutoField(primary_key=True)
    degree_code = models.ForeignKey(Degrees, models.DO_NOTHING, db_column='degree_code', blank=True, null=True)
    city_code = models.ForeignKey(Cities, models.DO_NOTHING, db_column='city_code', blank=True, null=True)
    job_code = models.ForeignKey(Jobs, models.DO_NOTHING, db_column='job_code', blank=True, null=True)
    wanted_no = models.CharField(max_length=45)
    company = models.CharField(max_length=45)
    title = models.CharField(max_length=100)
    salary_type = models.CharField(max_length=10)
    salary = models.IntegerField()
    working_day = models.CharField(max_length=100)
    career = models.CharField(max_length=50)
    reg_date = models.CharField(max_length=50)
    close_date = models.CharField(max_length=50)
    wanted_info_url = models.CharField(max_length=200, blank=True, null=True)
    reper_name = models.CharField(max_length=100, blank=True, null=True)
    corp_business = models.CharField(max_length=100, blank=True, null=True)
    corp_business_cont = models.CharField(max_length=100, blank=True, null=True)
    corp_homepage = models.CharField(max_length=150, blank=True, null=True)
    corp_size = models.CharField(max_length=70, blank=True, null=True)
    total_emp = models.IntegerField(blank=True, null=True)
    year_sales = models.IntegerField(blank=True, null=True)
    corp_addr = models.CharField(max_length=150, blank=True, null=True)
    job_name = models.CharField(max_length=200, blank=True, null=True)
    emp_type = models.CharField(max_length=300, blank=True, null=True)
    apply_num = models.IntegerField(blank=True, null=True)
    job_cont = models.CharField(max_length=1000, blank=True, null=True)
    language_cert = models.CharField(max_length=200, blank=True, null=True)
    major = models.CharField(max_length=300, blank=True, null=True)
    certificate = models.CharField(max_length=300, blank=True, null=True)
    prefer = models.CharField(max_length=500, blank=True, null=True)
    emp_process = models.CharField(max_length=500, blank=True, null=True)
    apply_method = models.CharField(max_length=300, blank=True, null=True)
    document = models.CharField(max_length=300, blank=True, null=True)
    work_region = models.CharField(max_length=300, blank=True, null=True)
    work_time = models.CharField(max_length=300, blank=True, null=True)
    insurance = models.CharField(max_length=300, blank=True, null=True)
    retirepay = models.CharField(max_length=10, blank=True, null=True)
    etc_welfare = models.CharField(max_length=300, blank=True, null=True)
    disable_con = models.CharField(max_length=300, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'wanted'

class All_in_one(models.Model):
    wanted_code = models.IntegerField(blank=True, null=True)
    job_family_code = models.IntegerField(blank=True, null=True)
    job_sub_code = models.IntegerField(blank=True, null=True)
    job_code = models.IntegerField(blank=True, null=True)
    degree_code = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'all_in_one'