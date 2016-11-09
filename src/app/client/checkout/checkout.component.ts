import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ng2-webstorage';

import { Event, InformationService, Seat, ShowService, Show } from '../../shared';

declare let StripeCheckout: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [InformationService]
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

  constructor(private informationService: InformationService) { }

  ngOnInit(): void {
    this.selectedSeats = JSON.parse(this.selectedSeatsString);

    let stripe = StripeCheckout.configure({
      key: this.informationService.getStripePublishableKey(),
      image: this.informationService.getStripeImageUrl(),
      locale: 'auto',
      token: (token) => {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    document.getElementById('payButton').addEventListener('click', (e) => {
      stripe.open({
        name: this.informationService.getOrganizationName(),
        description: this.getDescription(),
        zipCode: true,
        billingAddress: true,
        amount: this.getTotalCost() * 100
      });
      e.preventDefault();
    });

    window.addEventListener('popstate', () => {
      stripe.close();
    });
  }

  private getTotalCost(): number {
    return (this.adultTickets * this.adultCost) + (this.childTickets * this.childCost) + this.informationService.getTransactionFee();
  }

  private getDescription(): string {
    let description = '';

    if (this.adultTickets > 0) {
      description += (this.adultTickets + ' Adult');

      if (this.adultTickets > 1) {
        description += 's';
      }

      if (this.childTickets > 0) {
        description += ', ';
      }
    }

    if (this.childTickets > 0) {
      description += (this.childTickets + ' Child');

      if (this.childTickets > 1) {
        description += 'ren';
      }
    }

    return description;
  }
}
