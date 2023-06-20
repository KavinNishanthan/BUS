from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.encoders import jsonable_encoder
from model import BusModel
from fastapi.encoders import jsonable_encoder
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List
from model1 import User
from model2 import UserLogin
import smtplib
from email.message import EmailMessage


app =FastAPI()

origins = {'http://localhost:3000'}

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers=["*"],
)

client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client["Bus"]
collection = db["ticket"]
coll = db["users"]


@app.get("/buses")
async def get_buses(Fromm: str, Too: str):
    try:
        buses = await fetch_buses_data(Fromm, Too)
        return jsonable_encoder(buses)
    except Exception as e:
        return {"error": str(e)}

async def fetch_buses_data(Fromm: str, Too: str):
    projection = {"_id": 0}  # Exclude the _id field from the returned documents
    
    buses = await collection.find({"BusFrom": Fromm, "BusTo": Too},projection=projection).to_list(length=None)
    return buses

from typing import List

@app.post("/addseat")
async def addseats(payload: dict):
    busId = payload.get("busId")
    selectedSeats = payload.get("selectedSeats")

    bus_details = await collection.find_one({"id": int(busId)})

    if not bus_details:
        return {"message": "Bus not found"}

    busFromTime = bus_details.get("BusFtinme")
    busToTime = bus_details.get("BusTtinme")
    fromPlace = bus_details.get("BusFrom")
    toPlace = bus_details.get("BusTo")
    busName = bus_details.get("BusName")
    busFee = bus_details.get("BusFee") 
 
    
    print("Bus ID:", busId)
    print("Selected Seats:", selectedSeats)
    for x in selectedSeats:
        new_color = "grey"
        result = await collection.update_one(
            {"id": int(busId), "seat.id": int(x)},
            {"$set": {"seat.$.col": new_color}}
        )
    
    user_email = "elavarasuarasu799@gmail.com" 

    seat_count = len(selectedSeats)
    total_amount = seat_count * busFee + 32.25
    selected_seats = [str(seat) for seat in selectedSeats]

    send_booking_confirmation_email(user_email, busFromTime, busToTime, fromPlace, toPlace, busName, busFee, seat_count, total_amount, selected_seats)

    return {"message": "Seats added successfully"}

def send_booking_confirmation_email(user_email, busFromTime, busToTime, fromPlace, toPlace, busName, busFee, seat_count, total_amount, selected_seats):
    email_address = "kavinnishanthan2004@gmail.com"
    email_password = "qvlznyvtwvqmmdeu"

    msg = EmailMessage()
    msg['Subject'] = "Booking Confirmation"
    msg['From'] = email_address
    msg['To'] = user_email

    content = f"Your booking has been confirmed. Thank you for choosing our service.\n\n"
    content += f"Bus Name: {busName}\n"
    content += f"Bording Point: {fromPlace}\n"
    content += f"Droping Point: {toPlace}\n"
    content += f"Bording Time: {busFromTime}\n"
    content += f"Droping Time: {busToTime}\n"
    content += f"Bus Fee: {busFee}\n"
    content += f"Seat Count: {seat_count}\n"
    content += f"Selected Seats: {', '.join(selected_seats)}\n"
    content += f"Total Amount: Rs.{total_amount}\n"
    content += f"Customer Care: 9812523612\n"
    content += f"Payment is required at the boarding point. Please note that this email serves as your only ticket for the journey. Kindly present this email during boarding as proof of reservation.\n"

    msg.set_content(content)

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(email_address, email_password)
        smtp.send_message(msg)

    return "Mail sent successfully"

    

@app.post("/signup")
async def signup(user: User):
    user_dict = jsonable_encoder(user)
    try:
        await coll.insert_one(user_dict)
        return {"message": "User created successfully"}
    except Exception as e:
        return {"error": str(e)}


@app.post("/login")
async def login(user: UserLogin):
    email = user.email
    password = user.password

    try:
        doc = await coll.find_one({"email": email})
        if doc and doc["password"] == password:
            return {"message": "User logged in successfully"}
        else:
            raise HTTPException(status_code=401, detail="Invalid email or password")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
