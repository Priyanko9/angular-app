import { Component } from '@angular/core';
import {WeatherService} from './weather.service.ts';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  providers: [WeatherService]
})
export class ForecastComponent {

    forecastData=[];
    city;
    
    constructor(private weatherService : WeatherService, private route: ActivatedRoute){}

    ngOnInit(){
        
        this.city = this.route.snapshot.paramMap.get('city');
        this.getForecast(this.city);
        this.route.params.subscribe(
            (params:Params)=>{
                this.city=params['city'];
                this.getForecast(this.city);
            }
        )
        
    }
    getForecast(city){
        
        this.weatherService.getForecast(city)
            .subscribe((data)=>{
                    this.forecastData=data;
            });
    }

}