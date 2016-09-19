import { Injectable } from '@angular/core';

import { Seat, Row, Section } from './index';

@Injectable()
export class SeatService {
  getSections(): Promise<Section[]> {
    return Promise.resolve(SECTIONS);
  }

  getRows(): Promise<Row[]> {
    return Promise.resolve(ROWS);
  }

  getSeats(section: Section, row: Row): Promise<Seat[]> {
    return Promise.resolve(SEATS.filter(seat => seat.section == section.id && seat.row == row.id));
  }
}

// TODO: PULL FROM BACKEND REST API
const SEATS: Seat[] = [
  { id: 1, section: 'A', row: 'A', column: 1 },
  { id: 2, section: 'A', row: 'A', column: 2 },
  { id: 3, section: 'A', row: 'A', column: 3 },
  { id: 4, section: 'A', row: 'A', column: 4 },
  { id: 5, section: 'A', row: 'A', column: 5 },
  { id: 6, section: 'A', row: 'A', column: 6 },
  { id: 7, section: 'A', row: 'A', column: 7 },
  { id: 8, section: 'A', row: 'A', column: 8 },
  { id: 9, section: 'A', row: 'A', column: 9 },
  { id: 10, section: 'A', row: 'A', column: 10 },
  { id: 11, section: 'A', row: 'B', column: 1 },
  { id: 12, section: 'A', row: 'B', column: 2 },
  { id: 13, section: 'A', row: 'B', column: 3 },
  { id: 14, section: 'A', row: 'B', column: 4 },
  { id: 15, section: 'A', row: 'B', column: 5 },
  { id: 16, section: 'A', row: 'B', column: 6 },
  { id: 17, section: 'A', row: 'B', column: 7 },
  { id: 18, section: 'A', row: 'B', column: 8 },
  { id: 19, section: 'A', row: 'B', column: 9 },
  { id: 20, section: 'A', row: 'B', column: 10 }
];

const ROWS: Row[] = [
  { id: 'A', offsetLeft: 0, offsetRight: 0 },
  { id: 'B', offsetLeft: 0, offsetRight: 0 }
]

const SECTIONS: Section[] = [
  { id: 'A' },
  { id: 'B' }
]