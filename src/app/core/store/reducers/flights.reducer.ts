import { createReducer, on } from '@ngrx/store';
import { Journey } from '../../models';
import { LoadAllTrips, LoadCodes } from '../actions/flights.actions';

export interface FlightState {
  originCodes: string[];
  destinationCodes: string[];
  fromOriginTrips: Journey[];
  fromDestinationTrips: Journey[];
}

const initialState: FlightState = {
  originCodes: [],
  destinationCodes: [],
  fromOriginTrips: [],
  fromDestinationTrips: [],
};

export const flightsReducer = createReducer(
  initialState,
  on(LoadAllTrips, (state, { originTrips, destinationTrips }) => ({
    ...state,
    fromOriginTrips: originTrips,
    fromDestinationTrips: destinationTrips,
  })),
  on(LoadCodes, (state, { originCodes, destinationCodes }) => ({
    ...state,
    originCodes,
    destinationCodes,
  }))
);
