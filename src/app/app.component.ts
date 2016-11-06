import { Component } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { environment } from '../environments/environment';
import { InformationService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [InformationService]
})
export class AppComponent {
  constructor(private storageService: LocalStorageService, private informationService: InformationService) { }

  isSecure() {
    return location.protocol === 'https:' || !environment.production;
  }
}
