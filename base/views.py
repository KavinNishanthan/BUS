from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import stripe
from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from . serializer import *
import json
from rest_framework.response import Response
from django.http import HttpResponse
stripe.api_key = 'sk_test_51MoUolSAKU7oRdPlkeBHKqwDt9BuCTgW0Anyl0j3Qdfx2Th2rnVtdtjXgDgpSVeNcw2mS0ILwS5LcokxLFNgLoZC00Q8ImKLaW'

# class ReactView(APIView):

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

class CheckoutView(APIView):
    def get(self,request):
        print("the request ",request)
        items = request.GET.get('totalFee')
        values = request.GET.get('values')
        # items = request.POST.getlist('values.')
        print("items",items)
        # items = int(items) - 32.25
        line_items = [{"price":"price_1MoWA0SAKU7oRdPlzSVS5tzH","quantity":12}]
        try:
            session = stripe.checkout.Session.create(
            line_items=line_items,
            mode='payment',
            success_url='http://localhost:3000/success',
            cancel_url='http://localhost:3000/cancel',)
            
        except stripe.error.StripeError as e:
        # Handle specific Stripe errors
            error_message = e.user_message if hasattr(e, 'user_message') else str(e)
            return JsonResponse({'error': error_message})
        except:
            print('oh no oh no ',session)
        # print(session.url)
        # return Response(line_items)
        return JsonResponse({'url': session.url})
        # return JsonResponse({'url': session.url})
        # return JsonResponse({'error': 'Invalid request method'})

    
class RegisterView(APIView):
    def post(self,request):
        print(request)
        name = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        print(name,email)
        if name and email and password:
            obj = Register(name=name, email=email, password=password)
            obj.save()
            return Response({'message': 'Registration successful'}, status=201)
        return Response('negative')
    
class LoginView(APIView):
    def get(self,request):
        email = request.GET.get('email')
        password = request.GET.get('password')
        print(email,password)
        output = Register.objects.filter(email=email,password=password).values()
        if len(output)==1:
            return Response(output,status=200)
        return Response("not found",status=400)
        
        
    
    

    