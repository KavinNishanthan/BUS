from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient

app = FastAPI()

client = AsyncIOMotorClient("mongodb://localhost:27017/")

database = client["Bus"]
collection = database["ticket"]

async def fetch_data(from_location, to_location):
    query = {"BusFrom": from_location, "BusTo": to_location}
    cursor = collection.find(query)
    documents = await cursor.to_list(length=None)
    print(documents)
    return documents

