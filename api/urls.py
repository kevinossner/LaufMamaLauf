from django.urls import path
from .views import CustomerView, GetCustomerView, CreateCustomerView

urlpatterns = [
    path('customer/', CustomerView.as_view()),
    path('customer/<int:id>/', GetCustomerView.as_view()),
    path('customer/new/', CreateCustomerView.as_view())
]