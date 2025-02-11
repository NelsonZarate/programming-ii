import fetch from 'node-fetch';
import { writeFileSync } from 'fs';

async function fetchWeather(city) {  
  try {  
    const API_KEY = '';  
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=${API_KEY}&units=metric`);
    if (!response.ok) throw new Error(`Erro ao buscar clima: ${response.statusText}`);
    const data = await response.json();
    const newData = { name: data.name, temp: data.main.temp, humidity: data.main.humidity };
    return newData;
  } catch (error) {  
    console.error(error.message);
  }  
}  


async function fetchAllWeather(){
  const cities = ['London', 'Paris', 'Tokyo'];  
  const promises = cities.map(city => fetchWeather(city));
  const weather = await Promise.all(promises);
  writeFileSync('weather2.json', JSON.stringify(weather, null, 2));  
}


fetchAllWeather().then(data => console.log(data));
