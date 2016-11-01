import { Seat } from '../../seats/shared';
import { Show, Event } from '../../shows/shared';

export class Reservation {
  constructor(public id: string, public event: Event, public seats: Seat[], public purchaseDate: Date) { }
}
