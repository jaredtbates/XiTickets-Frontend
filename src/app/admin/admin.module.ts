import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { routing, adminRoutingProviders } from './admin.routing';

import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule
  ],
  providers: [
    adminRoutingProviders
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
