import { Component } from '@angular/core';
import { SeatService, Row } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-seats',
  templateUrl: 'seats.component.html',
  styleUrls: [ 'seats.component.css' ],
  providers: [ SeatService ]
})
export class SeatsComponent {
  rows: Row[] = [];

  constructor(private seatService: SeatService) { }

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
    });
  }

  ngOnInit(): void {
    this.getSeats();
  }
}
