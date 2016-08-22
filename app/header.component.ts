import {Component} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'partials/header.tpl'
})
export class HeaderComponent {
    pages = ['Shows', 'Seats', 'Checkout'];
}