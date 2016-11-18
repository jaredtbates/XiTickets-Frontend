import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ClientComponent, CheckoutComponent, ShowsComponent, SeatsComponent, routing } from './';

@NgModule({
  declarations: [
    CheckoutComponent,
    ClientComponent,
    ShowsComponent,
    SeatsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2BootstrapModule,
    ButtonsModule,
    routing
  ]
})
export class ClientModule { }
