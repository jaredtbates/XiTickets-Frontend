import {Component, OnInit} from '@angular/core';

import {Seat} from './seats.component';
import {SeatService} from './seat.service';

@Component({
    selector: 'seat-chart',
    providers: [SeatService],
    templateUrl: 'partials/seat-chart.html'
})
export class SeatChartComponent implements OnInit {
    rows: Row[] = [];
    
    constructor(private seatService: SeatService) {}

    getSeats(): void {
        this.seatService.getSeats().then(seats => {
            seats.forEach(seat => {
                let containingRow: Row;

                this.rows.forEach(row => {
                    if (row.id === seat.row) {
                        containingRow = row;
                        row.seats.push(seat);
                    }
                });

                if (containingRow == null) {
                    this.rows.push(new Row(seat.row, [seat]));
                }
            });
            console.log(this.rows);
        });
    }
    
    ngOnInit(): void {
        this.getSeats();
    }
}

class Row {
    constructor(public id: string, public seats: Seat[]) {}
}