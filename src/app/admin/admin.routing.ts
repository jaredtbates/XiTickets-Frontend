import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'prefix'
      }
    ]
  }
];

export let adminRoutingProviders: any[] = [

];

export const routing = RouterModule.forChild(adminRoutes);
