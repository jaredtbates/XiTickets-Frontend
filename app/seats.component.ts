import {Component, OnInit} from '@angular/core';

import {SeatService} from './seat.service';

@Component({
    selector: 'seats-container',
    providers: [SeatService],
    templateUrl: 'partials/seats.html'
})
export class SeatsComponent implements OnInit {
    seats: Seat[];

    constructor(private seatService: SeatService) { }

    getSeats(): void {
        this.seatService.getSeats().then(seats => this.seats = seats);
    }
    
    ngOnInit(): void {
        this.getSeats();
    }
}

export class Seat {
    id: number;
    row: string;
    column: number;
}