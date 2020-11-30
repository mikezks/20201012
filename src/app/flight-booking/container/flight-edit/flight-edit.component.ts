import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  id: number;
  showDetails: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id');
        this.showDetails = params.get('showDetails') === 'true';
      });
  }

}
