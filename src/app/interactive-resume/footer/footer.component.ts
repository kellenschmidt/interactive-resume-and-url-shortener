import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ks-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public currentDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
