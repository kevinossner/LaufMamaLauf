from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from .models import Customer
from .serializers import CustomerSerializer, CreateCustomerSerializer


# Create your views here.
class CustomerView(ListAPIView):
    queryset = Customer.objects.order_by('last_name').all()
    serializer_class = CustomerSerializer

class GetCustomerView(RetrieveAPIView):
    serializer_class = CustomerSerializer
    lookup_field = 'id'
    queryset = Customer.objects.all()

class CreateCustomerView(APIView):
    serializer_class = CreateCustomerSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            first_name = serializer.data.get('first_name')
            last_name = serializer.data.get('last_name')
            queryset = Customer.objects.filter(
                first_name=first_name, last_name=last_name)
            if queryset.exists():
                pass
            else:
                customer = Customer(first_name=first_name, last_name=last_name)
                customer.save()
            return Response(
                CustomerSerializer(customer).data, status=HTTP_201_CREATED)
        return Response(
            {'Bad Request': 'Invalid data...'}, status=HTTP_400_BAD_REQUEST)
