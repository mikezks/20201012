import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Flight } from '../../../entities/flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {
  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter();
  @Output() myflight = new EventEmitter<Flight>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);

    // Mutable update
    /* this.item.from = 'everything was hacked!';
    this.myflight.emit(this.item); */

    // Immutable update
    this.myflight.emit({
      ...this.item,
      from: 'I was hacked!'
    });
  }
}
