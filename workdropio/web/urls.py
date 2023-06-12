from django.urls import path
from .views import * 

urlpatterns = [
    path('', page, name="Home"),
    path('Queue/', index, name="Queue")
]
