from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField()
    subject = models.CharField(max_length=50)
    message = models.TextField(max_length=1000)
