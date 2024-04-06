# Takes models and returns them as JSONs
from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'room_id' ,'host', 'public', 'guest_can_vote', 'created_at')