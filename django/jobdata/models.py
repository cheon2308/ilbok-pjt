from django.db import models

# Create your models here.
class ApplyStatus(models.Model):
    code = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING)
    wanted_code = models.ForeignKey('Wanted', models.DO_NOTHING, db_column='wanted_code')

    class Meta:
        managed = False
        db_table = 'apply_status'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Careers(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey('Users', models.DO_NOTHING, blank=True, null=True)        
    sub_code = models.ForeignKey('JobSubFamily', models.DO_NOTHING, db_column='sub_code', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'careers'


class Cities(models.Model):
    code = models.IntegerField(primary_key=True)
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


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class JobCategory(models.Model):
    code = models.AutoField(primary_key=True)
    job_code = models.ForeignKey('Jobs', models.DO_NOTHING, db_column='job_code', blank=True, null=True)
    job_sub_code = models.ForeignKey('JobSubFamily', models.DO_NOTHING, db_column='job_sub_code', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_category'


class JobFamily(models.Model):
    code = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_family'


class JobSubFamily(models.Model):
    code = models.IntegerField(primary_key=True)
    job_family_code = models.ForeignKey(JobFamily, models.DO_NOTHING, db_column='job_family_code')
    name = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'job_sub_family'


class Jobs(models.Model):
    code = models.IntegerField(primary_key=True)
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
    code = models.IntegerField(primary_key=True)
    region = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'regions'


class Users(models.Model):
    user_id = models.BigAutoField(primary_key=True)
    degree_code = models.ForeignKey(Degrees, models.DO_NOTHING, db_column='degree_code', blank=True, null=True)
    city_code = models.ForeignKey(Cities, models.DO_NOTHING, db_column='city_code', blank=True, null=True)
    favorite = models.ForeignKey(JobSubFamily, models.DO_NOTHING, db_column='favorite', blank=True, null=True)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=80)
    age = models.IntegerField(blank=True, null=True)
    gender = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'


class Wanted(models.Model):
    code = models.AutoField(primary_key=True)
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
    wanted_code = models.ForeignKey('Wanted', models.DO_NOTHING, db_column='wanted_code')
    job_family_code = models.IntegerField(blank=True, null=True)
    job_sub_code = models.IntegerField(blank=True, null=True)
    job_code = models.IntegerField(blank=True, null=True)
    degree_code = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'all_in_one'