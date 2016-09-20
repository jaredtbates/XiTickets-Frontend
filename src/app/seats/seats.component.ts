import { Component, OnInit } from '@angular/core';

import { SessionStorage } from 'ng2-webstorage';

import { Seat, SeatService, Row, AvailabilityService } from './shared/index';
import { ShowService } from '../shows/shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-seats',
  templateUrl: 'seats.component.html',
  styleUrls: ['seats.component.css'],
  providers: [SeatService, ShowService, AvailabilityService]
})
export class SeatsComponent implements OnInit {
  @SessionStorage() selectedShow: number;
  @SessionStorage() selectedEvent: number;

  rows: Row[];

  constructor(private seatService: SeatService, private showService: ShowService, private availabilityService: AvailabilityService) { }

  getSeats(): void {
    this.seatService.getRows().then(rows => this.rows = rows);
  }

  ngOnInit(): void {
    this.getSeats();
  }
}
