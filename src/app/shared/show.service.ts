import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Show } from '../shared';

@Injectable()
export class ShowService {
  constructor(private http: Http) { }

  getShows(): Observable<Show[]> {
    //return this.http.get('http://localhost:3000/api/shows').map(res => res.json()).catch(this.handleError);
    return Observable.from([SHOWS]);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

// REMOVE THIS
const SHOWS: Show[] = [
  {
    name: "Example Show 1",
    description: "testing 12345",
    logoUrl: "https://placeholdit.imgix.net/~text?txtsize=35&txt=EXAMPLE%20SHOW&w=300&h=150",
    adultCost: 10,
    childCost: 8,
    id: "581f8f58236cb9e831b6cd9e"
  }
]
