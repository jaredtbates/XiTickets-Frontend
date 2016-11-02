import { Injectable } from '@angular/core';

import { Event } from '../../shows/shared';
import { Seat } from './';
import { Reservation } from '../../checkout/shared';

@Injectable()
export class ReservationService {
  getReservedSeats(event: Event): Promise<Seat[]> {
    console.log(event);
    let reservedSeats: Seat[] = []
    RESERVATIONS.filter(reservation => reservation.event.id === event.id).map(reservation => {
      reservation.seats.forEach(seat => reservedSeats.push(seat));
      console.log(reservation);
    });
    return Promise.resolve(reservedSeats);
  }
}

// TODO: Will be replaced by API call to check if specific seats are available on server-side. DO NOT send all reservations to client. That's a no-no.
const RESERVATIONS: Reservation[] = [
  {
    id: 'B5A9CC',
    seats: [
      { id: 'H_11', row: 'H', column: 13, blanksToLeft: 0 },
      { id: 'H_9', row: 'H', column: 14, blanksToLeft: 0 },
      { id: 'H_7', row: 'H', column: 15, blanksToLeft: 0 },
      { id: 'H_5', row: 'H', column: 16, blanksToLeft: 0 },
      { id: 'H_3', row: 'H', column: 17, blanksToLeft: 0 },
      { id: 'H_1', row: 'H', column: 18, blanksToLeft: 0 },
      { id: 'H_2', row: 'H', column: 19, blanksToLeft: 1 }
    ],
    event: { id: 1, showid: 1, date: new Date(2017, 1, 1, 15, 0, 0, 0) },
    purchaseDate: new Date(2016, 11, 1, 0, 0, 0)
  }
];
