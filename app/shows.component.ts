import {Component, OnInit} from '@angular/core';
import {CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {ShowService} from './show.service';

@Component({
    selector: 'shows-container',
    directives: [CollapseDirective],
    providers: [ShowService],
    templateUrl: 'partials/shows.tpl'
})
export class ShowsComponent implements OnInit {
    shows: Show[];
    isCollapsed: boolean = true;

    constructor(private showService: ShowService) { }

    getShows(): void {
        this.showService.getShows().then(shows => this.shows = shows);
    }
    
    ngOnInit(): void {
        this.getShows();
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