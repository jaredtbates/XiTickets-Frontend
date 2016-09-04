import {Injectable} from '@angular/core';

import {Event} from './datepicker.component';

@Injectable()
export class EventService {
    getEvents(): Promise<Event[]> {
        return Promise.resolve(EVENTS);
    }
}

// TODO: PULL FROM BACKEND REST API
const EVENTS: Event[] = [
    {
        id: 1,
        showid: 1,
        date: new Date(2017, 12, 1, 7, 0, 0, 0)
    }, {
        id: 2,
        showid: 2,
        date: new Date(2017, 12, 2, 7, 0, 0, 0)
    }, {
        id: 3,
        showid: 3,
        date: new Date(2017, 12, 3, 7, 0, 0, 0)
    }
];