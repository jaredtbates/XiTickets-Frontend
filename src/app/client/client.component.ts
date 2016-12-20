import { Component } from '@angular/core';
import { InformationService } from '../shared';

@Component({
  selector: 'app-client',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.scss'],
  providers: [InformationService]
})
export class ClientComponent {
  constructor(private informationService: InformationService) { };
}
