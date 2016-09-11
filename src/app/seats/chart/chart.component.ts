import { Component, OnInit } from '@angular/core';

import { Row } from './shared/index';
import { SeatService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-chart',
  templateUrl: 'chart.component.html',
  styleUrls: ['chart.component.css']
})
export class ChartComponent implements OnInit {
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
