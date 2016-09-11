import { Injectable } from '@angular/core';

import { Event } from './';

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
    date: new Date(2017, 1, 1, 19, 0, 0, 0)
  }, {
    id: 2,
    showid: 2,
    date: new Date(2017, 1, 2, 19, 0, 0, 0)
  }, {
    id: 3,
    showid: 3,
    date: new Date(2017, 1, 3, 19, 0, 0, 0)
  }
];