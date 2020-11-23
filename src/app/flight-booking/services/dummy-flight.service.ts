import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService {
  flights: Flight[] = [];

  find(from: string, to: string): Observable<Flight[]> {
    const staticFlights = [
      {
        id: 999,
        from: 'London',
        to: 'New York',
        date: new Date().toISOString(),
        delayed: true
      }
    ];

    return of(staticFlights);
  }
}
