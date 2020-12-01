import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FlightSearchComponent } from './flight-booking/container/flight-search/flight-search.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home(widget:flights)',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.module')
      .then(m => m.FlightBookingModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    outlet: 'widget',
    data: {
      state: {

      }
    }
  },
  {
    path: 'flights',
    component: FlightSearchComponent,
    outlet: 'widget',
    data: {
      state: {

      }
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
