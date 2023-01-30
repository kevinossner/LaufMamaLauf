from django.urls import path
from .views import CustomerView, GetCustomerView

urlpatterns = [
    path('customer/', CustomerView.as_view()),
    path('customer/<int:id>/', GetCustomerView.as_view())
]