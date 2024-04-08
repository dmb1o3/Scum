from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

class ListRoomView(generics.ListAPIView):
    # What models to return
    queryset = Room.objects.all()
    # How to serialize models
    serializer_class = RoomSerializer

class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        # Check to see if we have data needed
        if serializer.is_valid():
            public = serializer.data.get("public")
            # Get session key of host
            host = self.request.session.session_key
            # Check to see if host already has room created
            queryset = Room.objects.filter(host=host)
            # If host already has room update room settings
            if queryset.exists():
                room = queryset[0]
                room.public = public
                # Save room and force to update specified fields
                room.save(update_fields=['public'])
            else:
                room = Room(host=host, public=public)
                room.save()

        return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)