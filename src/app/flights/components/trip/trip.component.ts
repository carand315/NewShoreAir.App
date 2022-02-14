import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Currency, Flight } from 'src/app/core/models';
import { CurrencyState } from 'src/app/core/store/reducers/currency.reducer';
import { FlightState } from 'src/app/core/store/reducers/flights.reducer';
import { getSelectedCurrency } from 'src/app/core/store/selectors/currency.selectors';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.sass'],
})
export class TripComponent implements OnInit {
  @Input() flight: Flight = { price: 0 };
  selectedCurrency$: Observable<Currency> = new Observable<Currency>();
  constructor(
    private store: Store<{
      flightState: FlightState;
      currencyState: CurrencyState;
    }>
  ) {}

  ngOnInit(): void {
    this.selectedCurrency$ = this.store
      .select(getSelectedCurrency)
      .pipe(map((c) => c));
  }
}
