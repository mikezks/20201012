import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subscription, timer } from 'rxjs';
import { tap } from 'rxjs/operators';
import { validateCity, validateCityWithParams } from '../../../shared/validation/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit, OnDestroy {
  id: number;
  showDetails: boolean;

  editForm: FormGroup;

  timer$: Observable<number>;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.rxjsDemo();

    this.route.paramMap
      .subscribe(params => {
        this.id = +params.get('id');
        this.showDetails = params.get('showDetails') === 'true';
      });

    this.editForm = this.fb.group({
      id: [1],
      from: [
        'Graz',
        [
          Validators.required,
          Validators.minLength(3),
          validateCity
        ]
      ],
      to: [
        'Hamburg',
        [
          Validators.required,
          Validators.minLength(3),
          validateCityWithParams([
            'Berlin',
            'Frankfurt'
          ])
        ],
        [
          // async validators
        ]
      ],
      date: [new Date().toISOString()]
    });

    this.editForm.valueChanges
      .subscribe(console.log);
  }

  rxjsDemo(): void {
    this.timer$ = timer(0, 2000).pipe(
      tap(console.log)
    );

    /* this.subscription =
      this.timer$
        .subscribe(num => console.log('my timer value', num)); */
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  update(): void {
    this.editForm.patchValue({
      id: 9999
    });
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
