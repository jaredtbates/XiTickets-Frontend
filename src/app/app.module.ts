import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NG2_WEBSTORAGE } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { SeatsComponent } from './seats/seats.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    Ng2BootstrapModule,
    ButtonsModule
  ],
  declarations: [
    AppComponent,
    ShowsComponent,
    SeatsComponent
  ],
  providers: [
    appRoutingProviders,
    NG2_WEBSTORAGE,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
