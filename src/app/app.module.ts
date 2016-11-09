import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2Webstorage, KeyStorageHelper } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import * as Client from './client';
import { AdminComponent } from './admin/admin.component';

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
    Client.ShowsComponent,
    Client.SeatsComponent,
    Client.CheckoutComponent,
    AdminComponent
  ],
  providers: [
    appRoutingProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
