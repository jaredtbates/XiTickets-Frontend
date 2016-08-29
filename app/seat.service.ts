import {Injectable} from '@angular/core';

import {Seat} from './seats.component';

@Injectable()
export class SeatService {
    getSeats(): Promise<Seat[]> {
        return Promise.resolve(SEATS);
    }
}

// TODO: PULL FROM BACKEND REST API
const SEATS: Seat[] = [
    {id: 1, row: 'A', column: 1},
    {id: 2, row: 'A', column: 2},
    {id: 3, row: 'A', column: 3},
    {id: 4, row: 'A', column: 4},
    {id: 5, row: 'A', column: 5},
    {id: 6, row: 'A', column: 6},
    {id: 7, row: 'A', column: 7},
    {id: 8, row: 'A', column: 8},
    {id: 9, row: 'A', column: 9},
    {id: 10, row: 'A', column: 10}
];