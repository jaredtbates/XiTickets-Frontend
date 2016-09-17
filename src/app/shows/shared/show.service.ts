import { Injectable } from '@angular/core';

import { Show } from '../shared/index';

@Injectable()
export class ShowService {
  getShows(): Promise<Show[]> {
    return Promise.resolve(SHOWS);
  }

  getShow(id: number): Show {
    return SHOWS.find(show => show.id === id);
  }
}

// TODO: PULL FROM BACKEND REST API
const SHOWS: Show[] = [
  {
    id: 1,
    name: 'Example Show 1',
    description: 'This is example show 1.',
    logoUrl: 'https://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
    childCost: 8,
    adultCost: 10
  }, {
    id: 2,
    name: 'Example Show 2',
    description: 'This is example show 2.',
    logoUrl: 'https://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
    childCost: 8,
    adultCost: 10
  }, {
    id: 3,
    name: 'Example Show 3',
    description: 'This is example show 3.',
    logoUrl: 'https://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150',
    childCost: 8,
    adultCost: 10
  }
]
