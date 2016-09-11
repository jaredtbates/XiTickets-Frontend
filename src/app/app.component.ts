import { Component } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  constructor(private storageService: LocalStorageService) { }
}
