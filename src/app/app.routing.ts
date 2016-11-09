import { Routes, RouterModule } from '@angular/router';

import * as Client from './client';

const appRoutes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: Client.ShowsComponent },
  { path: 'seats', component: Client.SeatsComponent, canActivate: [ Client.SeatsGuard ] },
  { path: 'checkout', component: Client.CheckoutComponent, canActivate: [ Client.CheckoutGuard ] }
];

export let appRoutingProviders: any[] = [
  Client.SeatsGuard,
  Client.CheckoutGuard
];

export const routing = RouterModule.forRoot(appRoutes);
