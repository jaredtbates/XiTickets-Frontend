import { Routes, RouterModule } from '@angular/router';

import { ShowsComponent } from './shows';
import { SeatsComponent, SeatsGuard } from './seats';

const appRoutes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: ShowsComponent },
  { path: 'seats', component: SeatsComponent, canActivate: [ SeatsGuard ] }
];

export let appRoutingProviders: any[] = [
  SeatsGuard
];

export const routing = RouterModule.forRoot(appRoutes);
