import {Injectable} from '@angular/core';

import {Event, shows} from './shows.component';

@Injectable()
export class EventService {
    getShows(): Promise<Date[]> {
        return Promise.resolve(EVENTS);
    }
}

// TODO: PULL FROM BACKEND REST API
const EVENTS: Event[] = [
    {
        id: 1,
        show: 
    }, {
        id: 2,
        name: 'Example Show 2',
        description: 'This is example show 2.',
        logoUrl: 'http://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
        childCost: 8,
        adultCost: 10
    }, {
        id: 3,
        name: 'Example Show 3',
        description: 'This is example show 3.',
        logoUrl: 'http://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
        childCost: 8,
        adultCost: 10
    }
];