import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable} from 'rxjs';
import { AppComponent } from './AppComponent';
import { pipe, map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WeatherService{

    weatherUrl = 'api/heroes';
    apiKey='0346dbf5218df6df16c9d68b55f1ca61';
    pageLoadCity='bengaluru';
    
    constructor(private http: HttpClient){}
    
    getWeatherData(city):Observable<weatherData>{
        let customWeatherData={};
        return this.http.get<weatherData>('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=0346dbf5218df6df16c9d68b55f1ca61&units=metric')
            .pipe(map(weatherData =>{
                customWeatherData.weather=weatherData.weather[0].main;
                customWeatherData.temp=weatherData.main.temp;
                customWeatherData.humidity=weatherData.main.humidity;
                customWeatherData.temp_min=weatherData.main.temp_min;
                customWeatherData.temp_max=weatherData.main.temp_max;
                
                return customWeatherData;
            }));
    }
    
    getCities(): Observable<>{
       
       let cities=[];
        return this.http.get('./assets/city.list.json')
            .pipe(map((data)=>{
                for(let obj of data){
                    let city={};
                    city.name=obj.name;
                    city.country=obj.country;
                    cities.push(city);
                }
                
                return cities;
            }));
            
    }
    getForecast(city):Observable<weatherForecastData>{
        
        let forecastedData=[];
        return this.http.get<weatherData[]>('http://api.openweathermap.org/data/2.5/forecast?q='+ city +'&APPID=0346dbf5218df6df16c9d68b55f1ca61&units=metric')
            .pipe(map(weatherData =>{
                let data=weatherData.list;
                for(let obj of data){
                    let customWeatherForecastData={};
                    customWeatherForecastData.weather=obj.weather[0].main;
                    customWeatherForecastData.temp=obj.main.temp;
                    customWeatherForecastData.humidity=obj.main.humidity;
                    customWeatherForecastData.temp_min=obj.main.temp_min;
                    customWeatherForecastData.temp_max=obj.main.temp_max;
                    customWeatherForecastData.date=obj.dt_txt;
                    forecastedData.push(customWeatherForecastData);
                }
                
                
                return forecastedData;
            }));
    }

    
  }
}