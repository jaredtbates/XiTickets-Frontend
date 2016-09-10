import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { NG2_WEBSTORAGE } from 'ng2-webstorage';

import { AppComponent } from './app.component';
import { ShowsComponent } from './shows/shows.component';
import { SeatsComponent } from './seats/seats.component';
import { ChartComponent } from './seats/chart/chart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    Ng2BootstrapModule
  ],
  declarations: [
    AppComponent,
    ShowsComponent,
    SeatsComponent,
    ChartComponent
  ],
  providers: [
    appRoutingProviders,
    NG2_WEBSTORAGE
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
