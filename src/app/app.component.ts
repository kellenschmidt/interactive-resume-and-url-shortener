import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userAgent: string;
  isInternetExplorer: boolean;

  constructor() {
    this.userAgent = window.navigator.userAgent;
    this.isInternetExplorer = this.userAgent.indexOf('Trident/') > 0
  }

}
