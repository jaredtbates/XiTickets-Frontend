import { Event, Seat, Show } from '../shared';

export class Reservation {
  constructor(public id: string, public event: Event, public seats: Seat[], public purchaseDate: Date) { }
}
