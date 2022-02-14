import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightState } from '../reducers/flights.reducer';

const getCodeState = createFeatureSelector<FlightState>('flights');

export const getCodes = createSelector(getCodeState, (state: FlightState) => {
  return {
    originCodes: state?.originCodes,
    destinationCodes: state?.destinationCodes,
  };
});

const getAllTripState = createFeatureSelector<FlightState>('flights');

export const getAllTrips = createSelector(
  getAllTripState,
  (state: FlightState) => {
    return {
      fromOriginTrips: state?.fromOriginTrips,
      fromDestinationTrips: state?.fromDestinationTrips,
    };
  }
);
