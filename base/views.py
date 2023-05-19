from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
import json
from rest_framework.response import Response
from django.http import HttpResponse

# class ReactView(APIView):
#     def get(self,request):
#         from_list = request.GET.getlist('From')
#         to = request.GET.get('To')
#         print(from_list,to)
#         output = [{'employee':output.employee,
#                     "department":output.department}
#                   for output in React.objects.filter(employee=from_list)]
#         return Response(output)
#     def post(self,request):
#         serializer = ReactSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)
class BookingView(APIView):
    def get(self,request):
        from_list = request.GET.getlist('From')
        to = request.GET.get('To')
        print(from_list,to)
        # output = [{'Available':output.Availability,
        #             "BusName":output.BusName}
        #           for output in Booking.objects.filter(BusFrom=from_list[0],BusTo=to)]
        output = Booking.objects.filter(BusFrom=from_list[0], BusTo=to).values()
        print(output)
        return Response(output)
        
# def home (request):
#     return HttpResponse('Home page')

# def room(request):
#     return HttpResponse("ROOM")