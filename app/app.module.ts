import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {routing, appRoutingProviders} from './app.routing';

import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import {CollapseModule} from 'ng2-bootstrap/ng2-bootstrap';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component'
import {ShowsComponent} from './shows.component';
import {DatepickerComponent} from './datepicker.component';
import {SeatsComponent} from './seats.component';
import {SeatChartComponent} from './seat-chart.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        Ng2BootstrapModule,
        CollapseModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        ShowsComponent,
        DatepickerComponent,
        SeatsComponent,
        SeatChartComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }