import { Component } from '@angular/core';
import { AngularWebStorageModule, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-sessionstorage',
  templateUrl: './sessionstorage.component.html',
  styleUrls: ['./sessionstorage.component.css']
})

export class SessionstorageComponent {

  @LocalStorage() localValue: object = { text: `Hello ${+new Date}` };
  @LocalStorage('newKey', 10, 'h') localValue2: Object = { text: `Hello ${+new Date}` };
  @SessionStorage() sessionValue: string = `Hello ${+new Date}`;

}
