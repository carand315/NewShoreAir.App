import { createAction, props } from '@ngrx/store';
import { Journey, TripSearch } from '../../models';

export const SearchAllTrips = createAction(
  '[Search] Search API From Origin Trips',
  props<{ trip: TripSearch }>()
);

export const FinCodes = createAction('[Search] Find API Codes');

export const LoadAllTrips = createAction(
  '[Search] Load Origin Trips',
  props<{ originTrips: Journey[]; destinationTrips: Journey[] }>()
);

export const LoadCodes = createAction(
  '[Search] Load Codes',
  props<{ originCodes: string[]; destinationCodes: string[] }>()
);
