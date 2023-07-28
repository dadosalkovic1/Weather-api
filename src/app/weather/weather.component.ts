import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherServiceService } from 'services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent  {

  city: any;

  current_temp:any
  min_temp:any;
  max_temp:any;
  humidity:any;
  wind:any;
weatherData:any;

constructor(private WeatherService:WeatherServiceService){}

ngOnInit(){}

  getWeather(){

    this.WeatherService.getWeather(this.city).subscribe((data:any)=>{
this.weatherData=data;
this.current_temp=Number(this.weatherData.main.temp);
this.max_temp=this.weatherData.main.temp_max;
this.min_temp=this.weatherData.main.temp_min;
this.humidity=this.weatherData.main.humidity;
this.wind=this.weatherData.wind.speed;
    })


  }


}





