import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { AppComponent } from './app.component';


@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent
   ],
   providers: [
      // { provide: FlightService, useClass: DummyFlightService }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
