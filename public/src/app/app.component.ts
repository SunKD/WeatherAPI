import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dojo Weather Forecast';
  id: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: WeatherService
  ) { }

  ngOnInit() {
    // let id =this._route.params.subscribe((params: Params) => console.log(params['id']));
  }
}
