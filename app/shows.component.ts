import {Component, OnInit} from '@angular/core';

import {SessionStorage} from 'angular2-localstorage/WebStorage';

import {ShowService} from './show.service';
import {EventService} from './event.service';
import {DatepickerComponent} from './datepicker.component';

@Component({
    selector: 'shows-container',
    providers: [ShowService, EventService],
    templateUrl: 'partials/shows.html'
})
export class ShowsComponent implements OnInit {
    isDetailsCollapsed: boolean = true;
    hovering: number = null;
    shows: Show[];
    events: Array<any>;
    
    @SessionStorage() selectedShow: number = null;
    @SessionStorage() adultTickets: number = 0;
    @SessionStorage() childTickets: number = 0;

    constructor(private showService: ShowService, private eventService: EventService) { }

    getShows(): void {
        this.showService.getShows().then(retrievedShows => {
            this.shows = retrievedShows;
        });
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