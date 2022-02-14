import { createReducer, on } from '@ngrx/store';
import { Currency } from '../../models';
import {
  LoadCurrencies,
  SelectByNameCurrency,
} from '../actions/currency.actions';

export interface CurrencyState {
  currencies?: Currency[];
  selectedCurrency: Currency;
}

const initialState: CurrencyState = {
  currencies: [],
  selectedCurrency: {
    name: 'USD',
    value: 1,
  },
};

export const currencyReducer = createReducer(
  initialState,
  on(LoadCurrencies, (state, { currencies }) => ({ ...state, currencies })),
  on(SelectByNameCurrency, (state, { currencyByName }) => {
    const selectedCurrency: any = state.currencies?.find(
      (currency) => currency.name === currencyByName
    );

    return { ...state, selectedCurrency };
  })
);
