import { Component, OnInit } from '@angular/core';

import { SessionStorage } from 'ng2-webstorage';
import { Show, Event, ShowService, EventService } from '../../shared';

declare var moment: any;

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  providers: [ShowService, EventService]
})
export class ShowsComponent implements OnInit {
  hovering: Show = null;
  shows: Show[];
  events: Event[];
  days: string[];
  childCost: number = 3;
  adultCost: number = 5;

  @SessionStorage() selectedShow: Show;
  @SessionStorage() selectedEvent: Event;
  @SessionStorage() adultTickets: number;
  @SessionStorage() childTickets: number;

  constructor(private showService: ShowService, private eventService: EventService) { }

  getShows(): void {
    this.showService.getShows().subscribe(retrievedShows => this.shows = retrievedShows);
  }

  ngOnInit(): void {
    this.getShows();

    if (this.adultTickets == null && this.childTickets == null) {
      this.adultTickets = 0;
      this.childTickets = 0;
    } else if (this.selectedShow != null) {
      this.onShowClick(this.selectedShow, false);
    }
  }

  onShowClick(show: Show, resetEvent: boolean = true): void {
    this.selectedShow = show;
    this.days = null;

    this.eventService.getEvents(show).subscribe(retrievedEvents => {
      this.events = retrievedEvents;
      this.days = [];

      if (resetEvent) {
        this.selectedEvent = null;
      }

      this.events.forEach(event => {
        if (this.selectedEvent && this.selectedEvent.id === event.id) {
          // make events actually the same object, as JavaScript doesn't think they're equal unless we do this
          this.selectedEvent = event;
        }

        let day: string = new Date(event.date).toDateString();

        if (this.days.indexOf(day) === -1) {
          this.days.push(day);
        }
      });
    });
  }

  getEventsOnDay(day: string): Event[] {
    let eventsOnDay: Event[] = [];

    this.events.forEach(event => {
      if (new Date(event.date).toDateString() === day) {
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
