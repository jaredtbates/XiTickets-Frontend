import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SeatsComponent } from './seats/seats.component';
import { ShowsComponent } from './shows/shows.component';
import { CheckoutGuard } from './checkout/checkout-guard.service';
import { SeatsGuard } from './seats/seats-guard.service';

const clientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    children: [
      {
        path: '',
        redirectTo: 'shows'
      },
      {
        path: 'shows',
        component: ShowsComponent
      },
      {
        path: 'seats',
        component: SeatsComponent,
        canActivate: [SeatsGuard]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [CheckoutGuard]
      }
    ]
  },
];

export let clientRoutingProviders: any[] = [
  SeatsGuard,
  CheckoutGuard
];

export const routing = RouterModule.forChild(clientRoutes);
