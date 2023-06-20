from pydantic import BaseModel
from typing import List

class User(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str