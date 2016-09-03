import {Component} from '@angular/core';

import * as moment from 'moment';

@Component({
    selector: 'show-datepicker',
    template: '<datepicker [(ngModel)]="date" [minDate]="minDate" [showWeeks]="false" [onlyCurrentMonth]="true"></datepicker>'
})
export class DatepickerComponent {
    public date: Date = new Date();
    public minDate: Date = void 0;

    public constructor() {
        this.events = [
            { date: this.tomorrow, status: 'full' },
            { date: this.afterTomorrow, status: 'partially' }
        ];
    }

    public getDate(): number {
        return this.date && this.date.getTime() || new Date().getTime();
    }
}