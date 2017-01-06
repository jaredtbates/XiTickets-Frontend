import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Seat } from './';

@Injectable()
export class SeatService {
  rows: Row[];

  constructor(private http: Http) {
    this.getRows().subscribe(rows => {
      this.rows = rows;

      this.getSeats().subscribe(seats => rows.map(row => seats.filter(seat => seat.rowId === row.id).map(seat => {
        console.log(row);
        if (!row.seats) {
          row.seats = [];
        }
        row.seats.push(seat);
      })));
    });
  }

  private getRows(): Observable<Row[]> {
    return this.http.get('http://localhost:3000/api/rows').map(res => res.json()).catch(this.handleError);
  }

  private getSeats(): Observable<Seat[]> {
    return this.http.get('http://localhost:3000/api/seats').map(res => res.json()).catch(this.handleError);
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

export class Row {
  public seats: Seat[];

  constructor(public id: string) { }
}
