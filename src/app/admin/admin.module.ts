import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { routing, adminRoutingProviders } from './admin.routing';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    routing
  ],
  exports: [AdminComponent],
  providers: [
    adminRoutingProviders
  ]
})
export class AdminModule { }
