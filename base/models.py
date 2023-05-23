from django.db import models

# Create your models here.

class React(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=200)

class Booking(models.Model):
    id = models.AutoField(primary_key=True)
    BusFrom = models.CharField(max_length=30)
    BusTo = models.CharField(max_length=30)
    BusName = models.CharField(max_length=20)
    BusType = models.CharField(max_length=20)
    Arrival = models.CharField(max_length=20,default=1)
    Departure = models.CharField(max_length=20,default=5)
    BusFee = models.PositiveIntegerField()
    Availability = models.PositiveIntegerField(default=27)

class Register(models.Model):
    name = models.TextField(max_length=20)
    email = models.EmailField(primary_key=True)
    password = models.TextField(max_length=20) 
    bookedTicket = models.PositiveIntegerField(default=0)
    bookedId = models.PositiveIntegerField(default=0)
