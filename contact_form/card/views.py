from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer, ContactMiniSerializer
from rest_framework.response import Response

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def list(self, request, *args, **kwargs):
        contacts = Contact.objects.all()
        serializer = ContactMiniSerializer(contacts, many=True)
        return Response(serializer.data)
