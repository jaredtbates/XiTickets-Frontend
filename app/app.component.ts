import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'tickets-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: '/partials/base.html'
})
export class AppComponent { }