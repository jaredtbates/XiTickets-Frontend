import { Injectable } from '@angular/core';

import { Seat, Row } from './';

@Injectable()
export class SeatService {
  constructor() {
    this.getRows().then(rows => rows.forEach(row => {
      this.getSeats(row).then(seats => {
        row.seats = seats;
      });
    }));
  }

  getRows(): Promise<Row[]> {
    return Promise.resolve(ROWS);
  }

  getSeats(row: Row): Promise<Seat[]> {
    return Promise.resolve(SEATS.filter(seat => seat.row == row.id));
  }
}

// TODO: PULL FROM BACKEND REST API
const SEATS: Seat[] = [
  { id: 1, row: 'A', column: 1, label: 'A_33', blanksToLeft: 2, blanksToRight: 0 },
  { id: 2, row: 'A', column: 2, label: 'A_31', blanksToLeft: 0, blanksToRight: 0 },
  { id: 3, row: 'A', column: 3, label: 'A_29', blanksToLeft: 0, blanksToRight: 0 },
  { id: 4, row: 'A', column: 4, label: 'A_27', blanksToLeft: 0, blanksToRight: 0 },
  { id: 5, row: 'A', column: 5, label: 'A_25', blanksToLeft: 0, blanksToRight: 0 },
  { id: 6, row: 'A', column: 6, label: 'A_23', blanksToLeft: 0, blanksToRight: 0 },
  { id: 7, row: 'A', column: 7, label: 'A_21', blanksToLeft: 0, blanksToRight: 0 },
  { id: 8, row: 'A', column: 8, label: 'A_19', blanksToLeft: 0, blanksToRight: 0 },
  { id: 9, row: 'A', column: 9, label: 'A_17', blanksToLeft: 0, blanksToRight: 0 },
  { id: 10, row: 'A', column: 10, label: 'A_15', blanksToLeft: 0, blanksToRight: 0 },
  { id: 11, row: 'A', column: 11, label: 'A_13', blanksToLeft: 0, blanksToRight: 0 },
  { id: 12, row: 'A', column: 12, label: 'A_11', blanksToLeft: 0, blanksToRight: 0 },
  { id: 13, row: 'A', column: 13, label: 'A_9', blanksToLeft: 0, blanksToRight: 0 },
  { id: 14, row: 'A', column: 14, label: 'A_7', blanksToLeft: 0, blanksToRight: 0 },
  { id: 15, row: 'A', column: 15, label: 'A_5', blanksToLeft: 0, blanksToRight: 0 },
  { id: 16, row: 'A', column: 16, label: 'A_3', blanksToLeft: 0, blanksToRight: 0 },
  { id: 17, row: 'A', column: 17, label: 'A_1', blanksToLeft: 0, blanksToRight: 1 },
  { id: 18, row: 'A', column: 18, label: 'A_2', blanksToLeft: 0, blanksToRight: 0 },
  { id: 19, row: 'A', column: 19, label: 'A_4', blanksToLeft: 0, blanksToRight: 0 },
  { id: 20, row: 'A', column: 20, label: 'A_6', blanksToLeft: 0, blanksToRight: 0 },
  { id: 21, row: 'A', column: 21, label: 'A_8', blanksToLeft: 0, blanksToRight: 0 },
  { id: 22, row: 'A', column: 22, label: 'A_10', blanksToLeft: 0, blanksToRight: 0 },
  { id: 23, row: 'A', column: 23, label: 'A_12', blanksToLeft: 0, blanksToRight: 0 },
  { id: 24, row: 'A', column: 24, label: 'A_14', blanksToLeft: 0, blanksToRight: 0 },
  { id: 25, row: 'A', column: 25, label: 'A_16', blanksToLeft: 0, blanksToRight: 0 },
  { id: 26, row: 'A', column: 26, label: 'A_18', blanksToLeft: 0, blanksToRight: 0 },
  { id: 27, row: 'A', column: 27, label: 'A_20', blanksToLeft: 0, blanksToRight: 0 },
  { id: 28, row: 'A', column: 28, label: 'A_22', blanksToLeft: 0, blanksToRight: 0 },
  { id: 29, row: 'A', column: 29, label: 'A_24', blanksToLeft: 0, blanksToRight: 0 },
  { id: 30, row: 'A', column: 30, label: 'A_26', blanksToLeft: 0, blanksToRight: 0 },
  { id: 31, row: 'A', column: 31, label: 'A_28', blanksToLeft: 0, blanksToRight: 0 },
  { id: 32, row: 'A', column: 32, label: 'A_30', blanksToLeft: 0, blanksToRight: 0 },
  { id: 33, row: 'A', column: 33, label: 'A_32', blanksToLeft: 0, blanksToRight: 0 },
  { id: 34, row: 'A', column: 34, label: 'A_34', blanksToLeft: 0, blanksToRight: 1 },

  { id: 35, row: 'B', column: 1, label: 'B_35', blanksToLeft: 1, blanksToRight: 0 },
  { id: 36, row: 'B', column: 2, label: 'B_33', blanksToLeft: 0, blanksToRight: 0 },
  { id: 37, row: 'B', column: 3, label: 'B_31', blanksToLeft: 0, blanksToRight: 0 },
  { id: 38, row: 'B', column: 4, label: 'B_29', blanksToLeft: 0, blanksToRight: 0 },
  { id: 39, row: 'B', column: 5, label: 'B_27', blanksToLeft: 0, blanksToRight: 0 },
  { id: 40, row: 'B', column: 6, label: 'B_25', blanksToLeft: 0, blanksToRight: 0 },
  { id: 41, row: 'B', column: 7, label: 'B_23', blanksToLeft: 0, blanksToRight: 0 },
  { id: 42, row: 'B', column: 8, label: 'B_21', blanksToLeft: 0, blanksToRight: 0 },
  { id: 43, row: 'B', column: 9, label: 'B_19', blanksToLeft: 0, blanksToRight: 0 },
  { id: 44, row: 'B', column: 10, label: 'B_17', blanksToLeft: 0, blanksToRight: 0 },
  { id: 45, row: 'B', column: 11, label: 'B_15', blanksToLeft: 0, blanksToRight: 0 },
  { id: 46, row: 'B', column: 12, label: 'B_13', blanksToLeft: 0, blanksToRight: 0 },
  { id: 47, row: 'B', column: 13, label: 'B_11', blanksToLeft: 0, blanksToRight: 0 },
  { id: 48, row: 'B', column: 14, label: 'B_9', blanksToLeft: 0, blanksToRight: 0 },
  { id: 49, row: 'B', column: 15, label: 'B_7', blanksToLeft: 0, blanksToRight: 0 },
  { id: 50, row: 'B', column: 16, label: 'B_5', blanksToLeft: 0, blanksToRight: 0 },
  { id: 51, row: 'B', column: 17, label: 'B_3', blanksToLeft: 0, blanksToRight: 0 },
  { id: 52, row: 'B', column: 18, label: 'B_1', blanksToLeft: 0, blanksToRight: 1 },
  { id: 53, row: 'B', column: 19, label: 'B_2', blanksToLeft: 0, blanksToRight: 0 },
  { id: 54, row: 'B', column: 20, label: 'B_4', blanksToLeft: 0, blanksToRight: 0 },
  { id: 55, row: 'B', column: 21, label: 'B_6', blanksToLeft: 0, blanksToRight: 0 },
  { id: 56, row: 'B', column: 22, label: 'B_8', blanksToLeft: 0, blanksToRight: 0 },
  { id: 57, row: 'B', column: 23, label: 'B_10', blanksToLeft: 0, blanksToRight: 0 },
  { id: 58, row: 'B', column: 24, label: 'B_12', blanksToLeft: 0, blanksToRight: 0 },
  { id: 59, row: 'B', column: 25, label: 'B_14', blanksToLeft: 0, blanksToRight: 0 },
  { id: 60, row: 'B', column: 26, label: 'B_16', blanksToLeft: 0, blanksToRight: 0 },
  { id: 61, row: 'B', column: 27, label: 'B_18', blanksToLeft: 0, blanksToRight: 0 },
  { id: 62, row: 'B', column: 28, label: 'B_20', blanksToLeft: 0, blanksToRight: 0 },
  { id: 63, row: 'B', column: 29, label: 'B_22', blanksToLeft: 0, blanksToRight: 0 },
  { id: 64, row: 'B', column: 30, label: 'B_24', blanksToLeft: 0, blanksToRight: 0 },
  { id: 65, row: 'B', column: 31, label: 'B_26', blanksToLeft: 0, blanksToRight: 0 },
  { id: 66, row: 'B', column: 32, label: 'B_28', blanksToLeft: 0, blanksToRight: 0 },
  { id: 67, row: 'B', column: 33, label: 'B_30', blanksToLeft: 0, blanksToRight: 0 },
  { id: 68, row: 'B', column: 34, label: 'B_32', blanksToLeft: 0, blanksToRight: 0 },
  { id: 69, row: 'B', column: 35, label: 'B_34', blanksToLeft: 0, blanksToRight: 0 },
  { id: 70, row: 'B', column: 36, label: 'B_36', blanksToLeft: 0, blanksToRight: 0 },
  { id: 71, row: 'B', column: 37, label: 'B_38', blanksToLeft: 0, blanksToRight: 0 }
];

const ROWS: Row[] = [
  { id: 'A', seats: null },
  { id: 'B', seats: null }
]
