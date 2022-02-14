import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, switchMap } from 'rxjs';
import { CurrencyService } from '../../services/currency/currency.service';
import {
  LoadCurrencies,
  SearchAllCurrencies,
} from '../actions/currency.actions';

@Injectable()
export class CurrencyEffects {
  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}

  loadFlightCodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchAllCurrencies),
      mergeMap(() =>
        this.currencyService.getCurrenciesValues().pipe(
          map((currencies) => LoadCurrencies({ currencies })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
