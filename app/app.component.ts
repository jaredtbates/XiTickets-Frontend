import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'tickets-app',
    templateUrl: '/partials/base.tpl',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }