from pydantic import BaseModel
from typing import List

class UserLogin(BaseModel):
    email: str
    password: str