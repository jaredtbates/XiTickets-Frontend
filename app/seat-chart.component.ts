import {Component, OnInit} from '@angular/core';

import {Seat} from './seats.component';
import {SeatService} from './seat.service';

@Component({
    selector: 'seating-chart',
    providers: [SeatService]
})
export class SeatingChartComponent implements OnInit {
    seats: Seat[];

    constructor(private seatService: SeatService) { }

    getSeats(): void {
        this.seatService.getSeats().then(seats => this.seats = seats);
    }
    
    ngOnInit(): void {
        this.getSeats();
    }
}