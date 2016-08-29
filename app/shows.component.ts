import {Component, OnInit} from '@angular/core';

import {CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';

import {SessionStorage} from 'angular2-localstorage/WebStorage';

import {ShowService} from './show.service';
import {DatepickerComponent} from './datepicker.component';

@Component({
    selector: 'shows-container',
    directives: [CollapseDirective],
    providers: [ShowService],
    templateUrl: 'partials/shows.html'
})
export class ShowsComponent implements OnInit {
    shows: Show[];
    isDetailsCollapsed: boolean = true;
    hovering: number = null;
    
    @SessionStorage() selectedShow: number = null;
    @SessionStorage() adultTickets: number = 0;
    @SessionStorage() childTickets: number = 0;

    constructor(private showService: ShowService) { }

    getShows(): void {
        this.showService.getShows().then(shows => this.shows = shows);
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
    date: Date;
    logoUrl: string;
    childCost: number;
    adultCost: number;
}