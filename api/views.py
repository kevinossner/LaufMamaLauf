from django.shortcuts import render
from rest_framework import generics
from .models import Customer
from .serializers import CustomerSerializer


# Create your views here.
class CustomerView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer