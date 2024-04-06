from django.contrib import admin
from django.urls import path, include
from .views import CreateRoomView
from .views import ListRoomView


urlpatterns = [
    path('create/', CreateRoomView.as_view()),
    path('list/', ListRoomView.as_view()),
]