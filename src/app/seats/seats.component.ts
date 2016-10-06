import { Component, OnInit } from '@angular/core';

import { SessionStorage } from 'ng2-webstorage';

import { Seat, SeatService, Row, AvailabilityService } from './shared';
import { ShowService, Show, Event } from '../shows/shared';

@Component({
  selector: 'app-seats',
  templateUrl: 'seats.component.html',
  styleUrls: ['seats.component.scss'],
  providers: [SeatService, ShowService, AvailabilityService]
})
export class SeatsComponent implements OnInit {
  @SessionStorage() selectedShow: Show;
  @SessionStorage() selectedEvent: Event;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;
  @SessionStorage() selectedSeats;

  rows: Row[];

  constructor(private seatService: SeatService, private showService: ShowService, private availabilityService: AvailabilityService) { }

  getSeats(): void {
    this.seatService.getRows().then(rows => this.rows = rows);
  }

  ngOnInit(): void {
    this.getSeats();
    if (this.selectedSeats == null) {
      this.selectedSeats = [];
    }
  }

  getBlanks(numberOfBlanks: number) {
    return new Array(numberOfBlanks).fill(1);
  }

  onSeatClick(selectedSeat: Seat): void {
    this.selectedSeats.push(selectedSeat);
  }
}
