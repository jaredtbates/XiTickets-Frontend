import { Injectable } from '@angular/core';

@Injectable()
export class InformationService {
  getOrganizationName(): string {
    return 'Example Organization';
  }

  getOrganizationLogoUrl(): string {
    return 'https://placeholdit.imgix.net/~text?txtsize=30&txt=LOGO&w=250&h=80';
  }

  getStripePublishableKey(): string {
    return 'pk_test_748fDO2SNVUR1mhLvkERdTCn';
  }

  getStripeImageUrl(): string {
    return 'https://stripe.com/img/documentation/checkout/marketplace.png';
  }

  getTransactionFee(): number {
    return 2;
  }
}
