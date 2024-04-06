from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializer
from .models import Room
# Create your views here.

class ListRoomView(generics.ListAPIView):
    # What models to return
    queryset = Room.objects.all()
    # How to serialize models
    serializer_class = RoomSerializer

class CreateRoomView(generics.CreateAPIView):
    # What models to return
    queryset = Room.objects.all()
    # How to serialize models
    serializer_class = RoomSerializer