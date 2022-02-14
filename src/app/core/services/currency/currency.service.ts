import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Currency } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private ENDPOINT_NAME = 'convert';
  constructor(private http: HttpClient) {}

  getCurrenciesValues() {
    return this.http
      .get<any>(`${environment.apiCurrencies}/${this.ENDPOINT_NAME}`, {
        params: {
          q: 'USD_COP,USD_EUR',
          compact: 'ultra',
          apiKey: environment.currencyApiKey,
        },
      })
      .pipe(
        map((data) => {
          const appCurrencies: Currency[] = [];
          appCurrencies.push({ name: 'USD', value: 1 });
          appCurrencies.push({ name: 'COP', value: data['USD_COP'] });
          appCurrencies.push({ name: 'EUR', value: data['USD_EUR'] });
          return appCurrencies;
        })
      );
  }
}
