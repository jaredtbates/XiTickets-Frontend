import { Routes, RouterModule } from '@angular/router';

import { CheckoutComponent, CheckoutGuard, SeatsComponent, SeatsGuard, ShowsComponent } from './';

const clientRoutes: Routes = [
  {
    path: '',
    redirectTo: 'shows',
    pathMatch: 'full'
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
];

export const routing = RouterModule.forChild(clientRoutes);
