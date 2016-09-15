import { Component } from '@angular/core';
import { SeatService } from './shared/index';

@Component({
  moduleId: module.id,
  selector: 'app-seats',
  templateUrl: 'seats.component.html',
  styleUrls: [ 'seats.component.css' ],
  providers: [ SeatService ]
})
export class SeatsComponent { }
