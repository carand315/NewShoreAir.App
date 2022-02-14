import { createAction, props } from '@ngrx/store';
import { Currency } from '../../models';

export const SearchAllCurrencies = createAction('[App] Search All Currencies');

export const LoadCurrencies = createAction(
  '[App] Load Currencies',
  props<{ currencies: Currency[] }>()
);

export const SelectByNameCurrency = createAction(
  '[App] Select Currency by Name ',
  props<{ currencyByName: string }>()
);
