from django.urls import path

from portfolio.web.views import index

urlpatterns = [
    path('', index, name='index'),
]
