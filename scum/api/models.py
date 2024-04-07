from django.db import models
import string
import random

def generate_unique_room_id():
    length = 8
    while True:
        room_id = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(room_id=room_id).count() == 0:
            break
            
    return room_id

# Create your models here.
class Room(models.Model):
    room_id = models.CharField(max_length=8, default=generate_unique_room_id, unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_vote = models.BooleanField(null=False, default=False)
    public = models.BooleanField(null=False, default=False)
    created_at = models.DateTimeField(auto_now_add=True)
