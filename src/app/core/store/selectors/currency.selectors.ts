import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CurrencyState } from '../reducers/currency.reducer';

const geCurrencyState = createFeatureSelector<CurrencyState>('currency');

export const getSelectedCurrency = createSelector(
  geCurrencyState,
  (state: CurrencyState) => state.selectedCurrency
);
