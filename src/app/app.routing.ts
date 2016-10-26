import { Routes, RouterModule } from '@angular/router';

import { ShowsComponent } from './shows';
import { SeatsComponent, SeatsGuard } from './seats';
import { CheckoutComponent, CheckoutGuard } from './checkout';

const appRoutes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: ShowsComponent },
  { path: 'seats', component: SeatsComponent, canActivate: [ SeatsGuard ] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [ CheckoutGuard ] }
];

export let appRoutingProviders: any[] = [
  SeatsGuard,
  CheckoutGuard
];

export const routing = RouterModule.forRoot(appRoutes);
