import axios from 'axios';

const FETCH_WEATHER = 'FETCH_WEATHER';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'd6e0f59ad2174a7b9e3abd197d40271a';

export const fetchWeather = (city) => {
    const res = axios.get(BASE_URL, {
        params: {
            q: city,
            APPID: API_KEY
        }
    });
  return {
      type: FETCH_WEATHER,
      payload: res
  }
}