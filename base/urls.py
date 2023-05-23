from django.urls import path
from . import views
# from base.views import checkout
urlpatterns = [
    # path('',views.home,name='home'),
    # path('room/',views.room,name='room')
    path('',views.BookingView.as_view(),name='anything'),
    path('checkout/', views.CheckoutView.as_view(), name='checkout'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('register/', views.RegisterView.as_view(), name='register'),
]
