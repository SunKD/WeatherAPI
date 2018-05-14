import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private _httpClient: HttpClient) { }

  getWeather(city: string): any {
    return this._httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=3acce9ca4a92e91ab6719bbf134a3119");
  }
}
