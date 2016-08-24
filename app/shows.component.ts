import {Component} from '@angular/core';

import {ShowService} from './show.service';

@Component({
    selector: 'shows-container',
    templateUrl: 'partials/shows.tpl'
})
export class ShowsComponent {
    shows: Show[];
}

export class Show {
    id: number;
    name: string;
    date: Date;
    logoUrl: string;
    childCost: number;
    adultCost: number;
}