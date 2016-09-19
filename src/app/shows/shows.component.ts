import { Component, OnInit } from '@angular/core';

import { SessionStorage } from 'ng2-webstorage';
import * as moment from 'moment';

import { SeatsGuard } from '../seats/index';
import { Show, Event, ShowService, EventService } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-shows',
  templateUrl: 'shows.component.html',
  styleUrls: [ 'shows.component.css' ],
  providers: [ ShowService, EventService ]
})
export class ShowsComponent implements OnInit {
  isDetailsCollapsed: boolean = true;
  hovering: number = null;
  shows: Show[];
  events: Event[];
  days: string[] = [];

  @SessionStorage() selectedShow: number;
  @SessionStorage() selectedEvent: number;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;

  constructor(private showService: ShowService, private eventService: EventService) { }

  getShows(): void {
    this.showService.getShows().then(retrievedShows => {
      this.shows = retrievedShows;
    });
  }

  ngOnInit(): void {
    if (this.selectedShow == null && this.selectedEvent == null && this.adultTickets == null && this.childTickets == null) {
      this.adultTickets = 0;
      this.childTickets = 0;
    } else {
      this.onShowClick(this.selectedShow);
    }
    this.getShows();
  }

  onShowClick(id: number): void {
    this.selectedShow = id;
    this.eventService.getEventsFromShowId(id).then(events => {
      this.events = events;
      this.days = [];
      this.events.forEach(event => {
        let day: string = event.date.toDateString();
        if (this.days.indexOf(day) === -1) {
          this.days.push(day);
        }
      });
    });
    this.isDetailsCollapsed = false;
  }

  getEventsOnDay(day: string): Event[] {
    let eventsOnDay: Event[] = [];
    this.events.forEach(event => {
      if (event.date.toDateString() === day) {
        eventsOnDay.push(event);
      }
    });
    return eventsOnDay;
  }

  getReadableDateFromDateString(date: string): string {
    return moment(date, 'ddd MMM DD YYYY').format('MMMM Do, YYYY');
  }

  getReadableTimeFromDate(date: Date): string {
    return moment(date).format('h:mmA');
  }
}
