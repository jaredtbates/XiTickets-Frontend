import { Component } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(private storageService: LocalStorageService) { }
}
