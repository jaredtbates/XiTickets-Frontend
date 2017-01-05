import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    loadChildren: 'app/client/client.module#ClientModule',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: 'client',
    pathMatch: 'prefix'
  }
];

export let appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
