import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { InformationService } from './shared';

import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [InformationService]
})
export class AppComponent {
  constructor(private informationService: InformationService) { }

  isSecure() {
    return location.protocol === 'https:' || !environment.production;
  }
}
