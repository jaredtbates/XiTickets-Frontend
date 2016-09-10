import { Seat } from '../../shared/index';

export class Row {
  constructor(public id: string, public seats: Seat[]) { }
}
