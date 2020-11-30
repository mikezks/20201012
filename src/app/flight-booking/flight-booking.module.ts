import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './container/flight-search/flight-search.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';


@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent
  ],
  imports: [
    CommonModule,
    FlightBookingRoutingModule,
    SharedModule
  ]
})
export class FlightBookingModule { }
