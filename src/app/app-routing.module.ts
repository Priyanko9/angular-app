import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }   from './app.component';
import { ForecastComponent }      from './forecast.component';
import { AddNewData }      from './addNew.component';
import { WeatherDetailComponent }      from './weatherDetail.component';

const routes: Routes = [
  
  { path: 'weather/:city', component: WeatherDetailComponent },
  { path: 'forecast/:city', component: ForecastComponent },
  { path: 'addData', component: AddNewData }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}