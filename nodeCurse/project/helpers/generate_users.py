import random
import requests

URL = "https://gerador-nomes.wolan.net/nome/aleatorio"

class DatabasePopulation:
    def __init__(self: object, quantity: int) -> None:
        self.__user = []
        for _ in range(quantity):
            user_data = self.generate_users()
            self.__user.append(user_data)
    
    def get_user_data(self: object = None) -> list:
        r = requests.get(URL)
        user = r.json()
        return user
    
    def generate_users(self: object = None) -> None:
        user_data = []
        users_names = self.get_user_data()
        for i in users_names:
            user_email = i + '@gmail.com'
            user_age = random.randint(1, 70)
            user = [i, user_email, user_age]
            user_data.append(user)
        return user_data
    
    @property
    def user(self) -> object:
        return self.__user
    
    def __str__(self) -> str:
        return f"{self.user}"
     
    
test = DatabasePopulation(10)
for user in test.user:
    print(user)
