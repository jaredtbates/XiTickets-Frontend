import { Injectable } from '@angular/core';

import { Seat, Row } from './index';

@Injectable()
export class SeatService {
  constructor() {
    this.getRows().then(rows => rows.forEach(row => {
      this.getSeats(row).then(seats => {
        row.seats = seats;
      });
      this.getBlanks(row).then(blanks => {
        row.blanks = blanks;
      })
    }));
  }

  getRows(): Promise<Row[]> {
    return Promise.resolve(ROWS);
  }

  getSeats(row: Row): Promise<Seat[]> {
    return Promise.resolve(SEATS.filter(seat => seat.row == row.id));
  }

  getBlanks(row: Row) {
    return Promise.resolve(BLANKS.filter(blank => blank.row == row.id))
  }
}

// TODO: PULL FROM BACKEND REST API
const SEATS: Seat[] = [
  { id: 1, row: 'A', column: 1 },
  { id: 2, row: 'A', column: 2 },
  { id: 3, row: 'A', column: 3 },
  { id: 4, row: 'A', column: 4 },
  { id: 5, row: 'A', column: 5 },
  { id: 6, row: 'A', column: 6 },
  { id: 7, row: 'A', column: 7 },
  { id: 8, row: 'A', column: 8 },
  { id: 9, row: 'A', column: 9 },
  { id: 10, row: 'A', column: 10 },
  { id: 11, row: 'B', column: 1 },
  { id: 12, row: 'B', column: 2 },
  { id: 13, row: 'B', column: 3 },
  { id: 14, row: 'B', column: 4 },
  { id: 15, row: 'B', column: 5 },
  { id: 16, row: 'B', column: 6 },
  { id: 17, row: 'B', column: 7 },
  { id: 18, row: 'B', column: 8 },
  { id: 19, row: 'B', column: 9 },
  { id: 20, row: 'B', column: 10 }
];

const BLANKS = [
  { row: 'A', insertAfterColumn: 5 },
  { row: 'B', insertAfterColumn: 5 }
]

const ROWS: Row[] = [
  { id: 'A', seats: null, blanks: null },
  { id: 'B', seats: null, blanks: null }
]
