import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';


@NgModule({
  declarations: [
    FlightSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
