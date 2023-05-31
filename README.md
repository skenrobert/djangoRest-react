# djangoRest-react

//********************************************************************************************************
# Configuration Django

## first create folder (name project) them in cmd run the following command
pip install virtualenv

## execute module virtualenv (last venv name folder to create)
python -m venv venv

## activate virtual environment(in windows, these environments are recommended to be able to work different versions of python on the same computer y framework):
.\venv\Scripts\activate  (for exit write: deactivate)

## install:
pip install django 

## next command django-admin  (create project name, dot is for create in the root)
django-admin startproject django_crud_api .

## test project before to continue
python manage.py runserver

## after create app (one project have many app, is like CRUD )
python manage.py startapp tasks

## add tasks in INSTALLED_APPS (djando_crud_api/settings.py) 

INSTALLED_APPS = [
...,
    'tasks'
]

## execute migration (only table for the project work fine, default table, used database for default db.sqlite3)

python manage.py migrate

# test project before to continue
python manage.py runserver

//************************************************************************************************
## https://www.django-rest-framework.org/
## Configuration Django-Rest

## module api framework or rest framework
pip install djangorestframework

INSTALLED_APPS = [
...,
    'rest_framework'
    'tasks'
]


## https://pypi.org/project/django-cors-headers/
## connect backend with front install this module

pip install django-cors-headers

INSTALLED_APPS = [
...,
    'corsheaders',
    'rest_framework',
    'tasks'
]


MIDDLEWARE = [
    ...,
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    ...,
]

# the end same file (settings.py)
CORS_ALLOWED_ORIGINS = [
    "https://example.com",
    "https://sub.example.com",
    "http://localhost:8080",
    "http://127.0.0.1:9000",
]
