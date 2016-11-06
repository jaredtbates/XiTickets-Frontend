import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2Webstorage, KeyStorageHelper } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { SeatsComponent } from './seats/seats.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2BootstrapModule,
    ButtonsModule,
    Ng2Webstorage
  ],
  declarations: [
    AppComponent,
    ShowsComponent,
    SeatsComponent,
    CheckoutComponent
  ],
  providers: [
    appRoutingProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
