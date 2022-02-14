export interface TripSearch {
  destination: string;
  origin: string;
  maxStops: number;
}

export interface Journey {
  origin: string;
  destination: string;
  price: number;
  flights: Flight[];
}

export interface Flight {
  origin?: string;
  destination?: string;
  price: number;
  transport?: Transport;
}

export interface Transport {
  flightCarrier?: string;
  flightNumber?: string;
}
