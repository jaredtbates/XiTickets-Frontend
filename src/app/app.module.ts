import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { Ng2BootstrapModule, ButtonsModule } from 'ng2-bootstrap';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    Ng2Webstorage,
    routing
  ],
  providers: [
    appRoutingProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
