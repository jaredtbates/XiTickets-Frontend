import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    loadChildren: 'app/client/client.module#ClientModule'
  }
];

export let appRoutingProviders: any[] = [
  /*Client.SeatsGuard,
  Client.CheckoutGuard*/
];

export const routing = RouterModule.forRoot(appRoutes);
