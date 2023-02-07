from django.db import models
from django.contrib.auth.models import User
import os


# Create your models here.
class Data(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    data = models.FileField(null = False, blank = False)
    uploaded_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return os.path.basename(self.data.name)
