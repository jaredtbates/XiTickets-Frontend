import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ng2-webstorage';

import { Reservation, ReservationService, Row, Seat, SeatService, Show, ShowService, Event } from '../../shared';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
  providers: [SeatService, ShowService, ReservationService]
})
export class SeatsComponent implements OnInit {
  hovering: Seat = null;
  @SessionStorage() selectedShow: Show;
  @SessionStorage() selectedEvent: Event;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;
  @SessionStorage('selectedSeats') selectedSeatsString: string;
  selectedSeats: Seat[] = [];
  reservedSeats: Seat[] = [];
  rows: Row[] = [];
  childCost: number = 3;
  adultCost: number = 5;

  constructor(private seatService: SeatService, private showService: ShowService, private reservationService: ReservationService) { }

  getSeats(): void {
    this.seatService.getRows().then(rows => this.rows = rows);
    this.reservationService.getReservedSeats(this.selectedEvent).then(reservedSeats => this.reservedSeats = reservedSeats);
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
    if (this.selectedSeats.indexOf(selectedSeat) === -1 && this.reservedSeats.indexOf(selectedSeat) === -1 && this.selectedSeats.length < this.adultTickets + this.childTickets) {
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

  isSeatReserved(seat: Seat): boolean {
    for (let reservedSeat of this.reservedSeats) {
      if (reservedSeat.id === seat.id) {
        return true;
      }
    }
    return false;
  }
}
