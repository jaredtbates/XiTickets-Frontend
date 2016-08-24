import {Component} from '@angular/core';
import {ShowService} from './show.service';
import {CollapseDirective} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'shows-container',
    templateUrl: 'partials/shows.tpl'
})
export class ShowsComponent {
    shows: Show[];
    public isCollapsed:boolean = false;
}

export class Show {
    id: number;
    name: string;
    date: Date;
    logoUrl: string;
    childCost: number;
    adultCost: number;
}

@Component({
    selector: 'show-details',
    directives: [CollapseDirective],
    templateUrl: 'partials/show-details.tpl'
})
export class ShowDetailsComponent {
    public isCollapsed: boolean = true;
}