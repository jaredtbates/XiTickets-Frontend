import { Component, OnInit } from '@angular/core';

import { SessionStorage } from 'ng2-webstorage';

import { Seat, SeatService, Row, ReservationService } from '../seats/shared';
import { ShowService, Show, Event } from '../shows/shared';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  hovering: Seat = null;
  @SessionStorage() selectedShow: Show;
  @SessionStorage() selectedEvent: Event;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;
  @SessionStorage('selectedSeats') selectedSeatsString: string;
  selectedSeats;
  childCost: number = 3;
  adultCost: number = 5;

  ngOnInit() {
    this.selectedSeats = JSON.parse(this.selectedSeatsString);
  }
}
