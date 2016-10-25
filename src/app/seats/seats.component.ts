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
  hovering: Seat = null;
  @SessionStorage() selectedShow: Show;
  @SessionStorage() selectedEvent: Event;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;
  @SessionStorage('selectedSeats') selectedSeatsString: string;
  selectedSeats;
  rows: Row[];
  childCost: number = 3;
  adultCost: number = 5;

  constructor(private seatService: SeatService, private showService: ShowService, private availabilityService: AvailabilityService) { }

  getSeats(): void {
    this.seatService.getRows().then(rows => this.rows = rows);
  }

  ngOnInit(): void {
    this.getSeats();
    if (this.selectedSeats == null) {
      this.selectedSeatsString = '';
      this.selectedSeats = [];
    }
  }

  getBlanks(numberOfBlanks: number) {
    return new Array(numberOfBlanks).fill(1);
  }

  onSeatClick(selectedSeat: Seat): void {
    if (this.selectedSeats.indexOf(selectedSeat) === -1 && this.selectedSeats.length < this.adultTickets + this.childTickets) {
      this.addSelectedSeatToArray(selectedSeat);
    } else {
      this.removeSelectedSeatFromArray(selectedSeat);
    }
  }

  private addSelectedSeatToArray(selectedSeat: Seat): void {
    this.selectedSeats.push(selectedSeat);
    this.selectedSeatsString = JSON.stringify(this.selectedSeats);
  }

  private removeSelectedSeatFromArray(selectedSeat: Seat): void {
    let index = this.selectedSeats.indexOf(selectedSeat);

    if (index !== -1) {
      this.selectedSeats.splice(index, 1);
      this.selectedSeatsString = JSON.stringify(this.selectedSeats);
    }
  }
}
