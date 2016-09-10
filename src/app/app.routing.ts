import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './shows/index';
import { SeatsComponent } from './seats/index';

const appRoutes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'shows', component: ShowsComponent },
  { path: 'seats', component: SeatsComponent }
];

export let appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
