import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

import { SessionStorage } from 'ng2-webstorage';

@Injectable()
export class CheckoutGuard implements CanActivate {
  constructor(private router: Router) { }

  @SessionStorage() selectedShow: number;
  @SessionStorage() selectedEvent: number;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;
  @SessionStorage('selectedSeats') selectedSeatsString: string;

  canActivate() {
    if ((this.adultTickets + this.childTickets === 0 || this.adultTickets + this.childTickets > 30)
        || this.selectedEvent == null
        || (this.selectedSeatsString == null || this.selectedSeatsString.length === 0)) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
