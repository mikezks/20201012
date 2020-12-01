import { Component, EventEmitter, Input, Output } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Flight } from 'src/app/entities/flight';

import { FlightSearchComponent } from './flight-search.component';

@Component({
  selector: 'app-flight-card',
  template: ''
})
export class FlightCardComponent {
  @Input() item: Flight;
  @Input() selected: Flight;
  @Output() selectedChange = new EventEmitter();
}

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSearchComponent, FlightCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
