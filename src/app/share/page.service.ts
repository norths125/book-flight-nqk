import { Injectable } from '@angular/core';
import { Mockflight } from './mockflight';
import { Flight } from '../flight/fight';


@Injectable({
  providedIn: 'root'
})
export class PageService {

  flights: Flight[] = []
  constructor() {
    this.flights = Mockflight.mockFlight
  }

  getPages(){
    return this.flights
  }

  addFlight(flights:Flight){
    this.flights.push(flights)
  }

}
