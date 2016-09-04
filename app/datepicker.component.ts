import {Component, OnInit} from '@angular/core';

import {SessionStorage} from 'angular2-localstorage/WebStorage';

import {EventService} from './event.service';

import * as moment from 'moment';

@Component({
    selector: 'show-datepicker',
    template: '<datepicker [(ngModel)]="date" [minDate]="minDate" [showWeeks]="false" [onlyCurrentMonth]="true"></datepicker>'
})
export class DatepickerComponent implements OnInit {
    @SessionStorage() date: Date;
    events: Event[];

    public constructor(private eventService: EventService) {}

    getEvents(): void {
        this.eventService.getEvents().then(retrievedEvents => {
            this.events = retrievedEvents;
        });
    }

    ngOnInit(): void {
        this.getEvents();
    }
}

export class Event {
    id: number;
    showid: number;
    date: Date;
}