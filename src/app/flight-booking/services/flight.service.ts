import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Flight } from '../../entities/flight';
import { DefaultFlightService } from './default-flight.service';
import { DummyFlightService } from './dummy-flight.service';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if (environment.useFlightService === 'default') {
      return new DefaultFlightService(http);
    } else {
      return new DummyFlightService();
    }
  },
  deps: [HttpClient]
})
export abstract class FlightService {
  flights: Flight[];

  abstract find(from: string, to: string): Observable<Flight[]>;

}
