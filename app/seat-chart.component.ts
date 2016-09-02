import {Component, OnInit} from '@angular/core';

import {Seat} from './seats.component';
import {SeatService} from './seat.service';

@Component({
    selector: 'seat-chart',
    providers: [SeatService],
    templateUrl: 'partials/seat-chart.html'
})
export class SeatChartComponent implements OnInit {
    rows: Row[];
    
    constructor(private seatService: SeatService) {}

    getSeats(): void {
        this.seatService.getSeats().then(seats => {
            seats.map(seat => {
                if (this.rows[seat.row] == null) {
                    this.rows[seat.row] = [];
                }
                this.rows[seat.row].push(seat);
            });
            console.log(this.rows);
        });
    }
    
    ngOnInit(): void {
        this.getSeats();
    }
}

class Row {
    id: string;
    seats: Seat[];
}