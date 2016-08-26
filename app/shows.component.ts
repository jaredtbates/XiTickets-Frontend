import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';
import {ShowService} from './show.service';

@Component({
    selector: 'shows-container',
    directives: [CollapseDirective, NgClass],
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

    selectShow(event: Event): void {
        this.isCollapsed = false;
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