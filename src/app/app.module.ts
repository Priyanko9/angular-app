import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ForecastComponent }      from './forecast.component';
import { AddNewData }      from './addNew.component';
import { WeatherDetailComponent }      from './weatherDetail.component';

import {WeatherService} from './weather.service.ts';
import {autocompleteDirective} from './autocomplete.directive.ts';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    autocompleteDirective,
    ForecastComponent,
    AddNewData,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
