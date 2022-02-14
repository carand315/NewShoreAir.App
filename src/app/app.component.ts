import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchAllCurrencies } from './core/store/actions/currency.actions';
import { CurrencyState } from './core/store/reducers/currency.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'NewShoreAirApp';

  constructor(private store: Store<CurrencyState>) {
    this.store.dispatch(SearchAllCurrencies());
  }
}
