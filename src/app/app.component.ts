import { Component } from '@angular/core';
import {WeatherService} from './weather.service.ts';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent {
 
  
  cities=[];
  onlyCities=[];
  onlyCountries=[];
  citiesForCountries=[];
  selectedCity;
  
  constructor(private weatherService : WeatherService,private activatedRoute: ActivatedRoute,private router: Router){}
  
  ngOnInit(){
   
    this.getCities();
    
    console.log("cities:"+this.cities);
 
  }
  
  
  getCities(): void{
    this.weatherService.getCities().subscribe((data)=>{
        
        this.cities=data;
        let temp={};
        
        this.cities.map((city)=>{
            
            this.onlyCities.push(city);
            if(!temp[city.country]){
                this.onlyCountries.push(city.country);
                temp[city.country]=true;
            }
    });
      
        console.log("waited");
    })
  }
  
  getCitiesForCountries(country: string){
    this.cities.map((city)=>{
            
            
            if(city.country===country){
                this.citiesForCountries.push(city.name);
                
            }
    });
    console.log("wait");
  }
  
  addToInput(eventObj: any,textInput : HTMLInputElement): void{
    let target=eventObj.target;
    let currentTarget=eventObj.currentTarget;
    textInput.value=target.innerHTML;
    
    currentTarget.classList.remove("show");
    currentTarget.classList.add("hide");
    this.getCitiesForCountries(target.innerHTML);
    
    
  }
  addToInputForCity(eventObj: any,textInput : HTMLInputElement): void{
    let target=eventObj.target;
    let currentTarget=eventObj.currentTarget;
    textInput.value=target.innerHTML;
    
    currentTarget.classList.remove("show");
    currentTarget.classList.add("hide");
    this.selectedCity=target.innerHTML;
    
    

    let currentUrl=this.router.url;
    if(currentUrl.indexOf('forecast') > -1){
        this.router.navigate(['/forecast',this.selectedCity]);
    }
    
  }
}
