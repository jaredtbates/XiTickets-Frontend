import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {LocalStorageService} from 'angular2-localstorage/LocalStorageEmitter';

@Component({
    selector: 'tickets-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [LocalStorageService],
    templateUrl: '/partials/base.html'
})
export class AppComponent {
    constructor(storageService: LocalStorageService) { }
}