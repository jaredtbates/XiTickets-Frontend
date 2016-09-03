import {Component, OnInit} from '@angular/core';

import {SessionStorage} from 'angular2-localstorage/WebStorage';

import {ShowService} from './show.service';
import {EventService} from './event.service';
import {DatepickerComponent} from './datepicker.component';

export let shows: Show[];

@Component({
    selector: 'shows-container',
    providers: [ShowService],
    templateUrl: 'partials/shows.html'
})
export class ShowsComponent implements OnInit {
    isDetailsCollapsed: boolean = true;
    hovering: number = null;
    dates: Array<any>;
    
    @SessionStorage() selectedShow: number = null;
    @SessionStorage() adultTickets: number = 0;
    @SessionStorage() childTickets: number = 0;

    constructor(private showService: ShowService, private eventService: EventService) { }

    getShows(): void {
        this.showService.getShows().then(retrievedShows => {
            shows = retrievedShows;
            shows.forEach(show => {
                this.dates.push({date: show});
            });
        });
    }

    getEvents(): void {
        this.
    }
    
    ngOnInit(): void {
        this.getShows();
    }

    onClick(id: number, event: Event): void {
        this.isDetailsCollapsed = false;

        this.selectedShow = id;
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
    show: Show;
    date: Date;
}