import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'seats-container',
    templateUrl: 'partials/seats.html'
})
export class SeatsComponent { }

export class Seat {
    id: number;
    row: string;
    column: number;
}