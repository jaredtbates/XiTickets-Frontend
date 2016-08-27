import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header.component'
import {ShowsComponent} from './shows.component';
import {DatepickerComponent} from './datepicker.component';

import {routing, appRoutingProviders} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        ShowsComponent/*,
        DatepickerComponent*/
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }