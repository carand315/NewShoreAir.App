import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { SelectByNameCurrency } from 'src/app/core/store/actions/currency.actions';
import {
  FinCodes,
  SearchAllTrips,
} from 'src/app/core/store/actions/flights.actions';
import { FlightState } from 'src/app/core/store/reducers/flights.reducer';
import { getCodes } from 'src/app/core/store/selectors/flights.selectors';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass'],
})
export class SearchBarComponent implements OnInit {
  form: any;
  originCodes$: Observable<string[]> = new Observable<string[]>();
  destinationCodes$: Observable<string[]> = new Observable<string[]>();

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<FlightState>
  ) {}

  ngOnInit(): void {
    this.originCodes$ = this.store
      .select(getCodes)
      .pipe(map((codes) => codes.originCodes));

    this.destinationCodes$ = this.store
      .select(getCodes)
      .pipe(map((codes) => codes.destinationCodes));

    this.store.dispatch(FinCodes());

    this.buildForm();
  }

  buildForm() {
    const pattern = "^[a-zA-Z]{3}$";

    this.form = this.formBuilder.group({
      origin: ['', [Validators.required, Validators.pattern(pattern)]],
      destination: ['', [Validators.required, Validators.pattern(pattern)]],
      maxStops: [1],
      currency: ['USD'],
    });

    this.form.get('destination').disable();
    this.form.get('origin').valueChanges.subscribe((value: any) => {
      const destination = this.form.get('destination');
      if (value === this.form.value.destination) {
        destination.setValue('');
      }
      destination.enable();
    });
  }

  onSelectionChange(changeEvent: any) {
    this.store.dispatch(
      SelectByNameCurrency({ currencyByName: changeEvent.value })
    );
  }

  onSubmit() {
    const { origin, destination, maxStops } = this.form.value;

    this.store.dispatch(
      SearchAllTrips({
        trip: {
          destination,
          origin,
          maxStops,
        },
      })
    );
  }
}
