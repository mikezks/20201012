import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { FlightBookingModule } from './flight-booking/flight-booking.module';
import { AppComponent } from './app.component';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';


@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(APP_ROUTES, {
        preloadingStrategy: PreloadAllModules
      }),
      CoreModule,
      // FlightBookingModule <-- no direct import because of Lazy Loading
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
