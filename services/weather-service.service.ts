import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http:HttpClient) { }
  getWeather(city:string){

    let apiKey='28871deb22988da283bee272628421c4';
  
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apiKey);
  }
  
  }