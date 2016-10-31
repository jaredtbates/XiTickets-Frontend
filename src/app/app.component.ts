import { Component } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private storageService: LocalStorageService) { }

  isSecure() {
    return location.protocol === 'https:' || !environment.production;
  }
}
