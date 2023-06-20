from pydantic import BaseModel
from typing import List

class Seat(BaseModel):
    id: int
    col: str
    flag: int

class BusModel(BaseModel):
    id: int
    BusFrom: str
    BusTo: str
    BusName: str
    BusType: str
    BusRatings: str
    BusFtinme: str
    BusTtinme: str
    BusFee: int
    seat: List[Seat]

