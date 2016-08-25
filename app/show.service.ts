import {Injectable} from '@angular/core';

import {Show} from './shows.component';

@Injectable()
export class ShowService {
    getShows(): Promise<Show[]> {
        return Promise.resolve(SHOWS);
    }
}

// TODO: PULL FROM BACKEND REST API
const SHOWS: Show[] = [
    {
        id: 1,
        name: 'Example Show 1',
        description: 'This is example show 1.',
        date: new Date('January 1, 2020 00:00:00'),
        logoUrl: 'http://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
        childCost: 8,
        adultCost: 10
    }, {
        id: 1,
        name: 'Example Show 2',
        description: 'This is example show 2.',
        date: new Date('January 2, 2020 00:00:00'),
        logoUrl: 'http://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
        childCost: 8,
        adultCost: 10
    }, {
        id: 1,
        name: 'Example Show 3',
        description: 'This is example show 3.',
        date: new Date('January 3, 2020 00:00:00'),
        logoUrl: 'http://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
        childCost: 8,
        adultCost: 10
    }
];