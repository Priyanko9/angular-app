import { Component } from '@angular/core';
import {WeatherService} from './weather.service.ts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'weather-detail',
  templateUrl: './weatherDetail.component.html',
  styleUrls: ['./weatherDetail.component.css'],
  providers: [WeatherService]
})
export class WeatherDetailComponent {
 
  weatherData={};
  city;
  
  constructor(private weatherService:WeatherService,private route: ActivatedRoute){}
  
  ngOnInit(){
    
        this.city = this.route.snapshot.paramMap.get('city');
        this.getWeatherData(this.city);
        this.route.params.subscribe(
            (params:Params)=>{
                this.city=params['city'];
                this.getWeatherData(this.city);
            }
        )
  }
  
  
  getWeatherData(city): void{
      this.weatherService.getWeatherData(city).subscribe((data)=>{
        
        this.weatherData=data;
        });
  }
}