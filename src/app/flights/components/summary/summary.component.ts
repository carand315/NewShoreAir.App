import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of, tap } from 'rxjs';
import { Currency, Journey } from 'src/app/core/models';
import { CurrencyState } from 'src/app/core/store/reducers/currency.reducer';
import { FlightState } from 'src/app/core/store/reducers/flights.reducer';
import { getSelectedCurrency } from 'src/app/core/store/selectors/currency.selectors';
import { getAllTrips } from 'src/app/core/store/selectors/flights.selectors';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass'],
})
export class SummaryComponent implements OnInit {
  originFlight$: Observable<Journey[]> =  of<Journey[]>([]);
  destinationFlight$: Observable<Journey[]> =of<Journey[]>([]);
  selectedCurrency$: Observable<Currency> = of();
  searchMade = false;
  constructor(
    private store: Store<{
      flightState: FlightState;
      currencyState: CurrencyState;
    }>
  ) {}

  ngOnInit(): void {
    const fullSearch = this.store.select(getAllTrips);

   // const fullSearch = allJourneys.pipe(tap(() => ()));

    this.originFlight$ = fullSearch.pipe(map((f) => f.fromOriginTrips));

    this.destinationFlight$ = fullSearch.pipe(
      map((f) => f.fromDestinationTrips)
    );

    this.selectedCurrency$ = this.store
      .select(getSelectedCurrency)
      .pipe(map((c) => c));
  }



}
