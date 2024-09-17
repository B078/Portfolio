import requests

API_KEY = 'your_api_key'
CITY = 'London'
URL = f'http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}'

def get_weather():
    response = requests.get(URL)
    data = response.json()
    return data

weather = get_weather()
print(f"Weather in {CITY}: {weather['weather'][0]['description']}")
