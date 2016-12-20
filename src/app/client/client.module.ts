import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { ClientComponent } from './client.component';
import { CheckoutComponent, ShowsComponent, SeatsComponent, routing } from './';

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
    HttpModule,
    Ng2BootstrapModule,
    ButtonsModule,
    routing
  ],
  exports: [ClientComponent],
  bootstrap: [ClientComponent],
  entryComponents: [ClientComponent]
})
export class ClientModule { }
