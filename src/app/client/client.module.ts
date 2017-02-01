import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap';

import { routing, clientRoutingProviders } from './client.routing';

import { ClientComponent } from './client.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShowsComponent } from './shows/shows.component';
import { SeatsComponent } from './seats/seats.component';

@NgModule({
  declarations: [
    CheckoutComponent,
    ClientComponent,
    ShowsComponent,
    SeatsComponent
  ],
  imports: [
    ButtonsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    routing
  ],
  exports: [ClientComponent],
  providers: [
    clientRoutingProviders
  ]
})
export class ClientModule { }
