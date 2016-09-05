import {Component, OnInit} from '@angular/core';

import {SessionStorage} from 'angular2-localstorage/WebStorage';

import {ShowService} from './show.service';
import {EventService} from './event.service';

import * as moment from 'moment';

@Component({
    selector: 'shows-container',
    providers: [ShowService, EventService],
    templateUrl: 'partials/shows.html'
})
export class ShowsComponent implements OnInit {
    isDetailsCollapsed: boolean = true;
    hovering: number = null;
    shows: Show[];
    events: Event[];
    days: string[] = [];

    public radioModel:string = 'Middle';
    
    @SessionStorage() selectedShow: number = null;
    @SessionStorage() selectedEvent: number = null;
    @SessionStorage() adultTickets: number = 0;
    @SessionStorage() childTickets: number = 0;

    constructor(private showService: ShowService, private eventService: EventService) {}

    getShows(): void {
        this.showService.getShows().then(retrievedShows => {
            this.shows = retrievedShows;
        });
    }
    
    getEvents(): void {
        this.eventService.getEvents().then(retrievedEvents => {
            this.events = retrievedEvents;
            this.events.forEach(event => {
                let day: string = event.date.toDateString();
                if (this.days.indexOf(day) === -1) {
                    this.days.push(day);
                }
            });
        });
    }
    
    ngOnInit(): void {
        this.getShows();
        this.getEvents();
    }

    onShowClick(id: number): void {
        this.isDetailsCollapsed = false;
        this.selectedShow = id;
    }

    getEventsOnDay(day: string): Event[] {
        let eventsOnDay: Event[] = [];
        this.events.forEach(event => {
            if (event.date.toDateString() === day) {
                eventsOnDay.push(event);
            }
        });
        return eventsOnDay;
    }

    getTimeFromDate(date: Date): string {
        return moment(date).format('h:mmA');
    }
}

export class Show {
    id: number;
    name: string;
    description: string;
    logoUrl: string;
    childCost: number;
    adultCost: number;
}

export class Event {
    id: number;
    showid: number;
    date: Date;
}