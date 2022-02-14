import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, forkJoin, map, mergeMap, switchMap } from 'rxjs';
import { FlightsService } from '../../services/flights/flights.service';
import {
  LoadCodes,
  FinCodes,
  SearchAllTrips,
  LoadAllTrips,
} from '../actions/flights.actions';

@Injectable()
export class FlightsEffects {
  constructor(
    private actions$: Actions,
    private flightsService: FlightsService
  ) {}

  loadFlightCodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FinCodes),
      mergeMap(() =>
        forkJoin([
          this.flightsService.getAllOriginCodes(),
          this.flightsService.getAllDestinationCodes(),
        ]).pipe(
          map((codes) =>
            LoadCodes({ originCodes: codes[0], destinationCodes: codes[1] })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadAllTrips$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchAllTrips),
      switchMap((action) =>
        forkJoin([
          this.flightsService.getTrip(action.trip),
          this.flightsService.getTrip({
            destination: action.trip.origin,
            origin: action.trip.destination,
            maxStops: action.trip.maxStops
          }),
        ]).pipe(
          map((trips) =>
            LoadAllTrips({ originTrips: trips[0], destinationTrips: trips[1] })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
