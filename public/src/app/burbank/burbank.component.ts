import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
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
