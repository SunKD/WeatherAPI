import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  locationWeather: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: WeatherService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      console.log(params);
      this.updateWeather();
    });
  }

  updateWeather() {
    let thisWeather = this._httpService.getWeather("San Jose")
      .subscribe(data => {
        console.log(data);
        this.locationWeather = data;
      })
  }

}
