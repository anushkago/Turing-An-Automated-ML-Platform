from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Data

class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = '__all__'
        