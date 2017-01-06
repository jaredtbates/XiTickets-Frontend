import { Injectable } from '@angular/core';

import { Event, Reservation, Seat } from '../shared';

@Injectable()
export class ReservationService {
  getReservedSeats(event: Event): Promise<Seat[]> {
    let reservedSeats: Seat[] = []
    RESERVATIONS.filter(reservation => reservation.event.id === event.id).map(reservation => reservation.seats.forEach(seat => reservedSeats.push(seat)));
    return Promise.resolve(reservedSeats);
  }
}

// TODO: Will be replaced by API call to check if specific seats are available on server-side. DO NOT send all reservations to client. That's a no-no.
const RESERVATIONS: Reservation[] = [
  {
    id: 'B5A9CC',
    event: { id: 'sdgdsjgdfsgh', showId: 'dshgsdgs', date: new Date(2017, 1, 1, 15, 0, 0, 0) },
    seats: [
      { id: 'H_11', rowId: 'H', column: 13, blanksToLeft: 0 },
      { id: 'H_9', rowId: 'H', column: 14, blanksToLeft: 0 },
      { id: 'H_7', rowId: 'H', column: 15, blanksToLeft: 0 },
      { id: 'H_5', rowId: 'H', column: 16, blanksToLeft: 0 },
      { id: 'H_3', rowId: 'H', column: 17, blanksToLeft: 0 },
      { id: 'H_1', rowId: 'H', column: 18, blanksToLeft: 0 }
    ],
    purchaseDate: new Date(2016, 11, 1, 0, 0, 0)
  }
];
