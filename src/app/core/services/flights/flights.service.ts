import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Journey, TripSearch } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private ENDPOINT_NAME = 'Flights';
  constructor(private http: HttpClient) {}

  getAllOriginCodes() {
    return this.http.get<string[]>(
      `${environment.apiUrl}/${this.ENDPOINT_NAME}/GetAllOriginCodes`
    );
  }

  getAllDestinationCodes() {
    return this.http.get<string[]>(
      `${environment.apiUrl}/${this.ENDPOINT_NAME}/GetAllDestinationCodes`
    );
  }

  getTrip(payload: TripSearch) {
    return this.http.get<Journey[]>(
      `${environment.apiUrl}/${this.ENDPOINT_NAME}`,
      {
        params: {
          ...payload,
          deep: payload.maxStops
        }
      }
    );
  }
}
