from django.shortcuts import render
from rest_framework import generics
from django.shortcuts import get_object_or_404
from .models import Customer
from .serializers import CustomerSerializer


# Create your views here.
class CustomerView(generics.ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

# views.py

class GetCustomerView(generics.RetrieveAPIView):
    serializer_class = CustomerSerializer
    lookup_field = 'id'
    queryset = Customer.objects.all()