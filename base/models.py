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
    BusFee = models.PositiveIntegerField(default=400)
    Availability = models.PositiveIntegerField(default=27)
