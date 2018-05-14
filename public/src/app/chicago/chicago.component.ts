import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
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
    let thisWeather = this._httpService.getWeather("Seattle")
      .subscribe(data => {
        console.log(data);
        this.locationWeather = data;
      })
  }
}
