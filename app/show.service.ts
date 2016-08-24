import {Injectable} from '@angular/core';

import {Show} from './shows.component';

@Injectable()
export class ShowService {
}

// TODO: PULL FROM BACKEND REST API
const SHOWS: Show[] = [
    {
        id: 1,
        name: 'Example Show',
        date: new Date('January 1, 2020 00:00:00'),
        logoUrl: 'http://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
        childCost: 8,
        adultCost: 10
    }
];