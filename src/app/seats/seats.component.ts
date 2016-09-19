import { Component, OnInit } from '@angular/core';

import { SessionStorage } from 'ng2-webstorage';

import { SeatService, Row, AvailabilityService } from './shared/index';
import { ShowService } from '../shows/shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-seats',
  templateUrl: 'seats.component.html',
  styleUrls: [ 'seats.component.css' ],
  providers: [ SeatService, ShowService, AvailabilityService ]
})
export class SeatsComponent implements OnInit {
  rows: Row[] = [];

  @SessionStorage() selectedShow: number = null;
  @SessionStorage() selectedEvent: number = null;

  constructor(private seatService: SeatService, private showService: ShowService, private availabilityService: AvailabilityService) { }

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
