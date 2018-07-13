import { Component, OnInit } from '@angular/core';
import { appVersion } from 'src/environments/app-version';

@Component({
  selector: 'ks-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentDate = new Date();
  public appVersion = appVersion;

  constructor() { }

  ngOnInit() {
  }

}
