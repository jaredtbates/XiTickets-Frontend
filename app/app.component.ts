import {Component} from '@angular/core';
import {LocalStorageService} from 'angular2-localstorage/LocalStorageEmitter';

@Component({
    selector: 'tickets-app',
    providers: [LocalStorageService],
    templateUrl: '/partials/base.html'
})
export class AppComponent {
    constructor(storageService: LocalStorageService) { }
}