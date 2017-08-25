import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../shared/card';

@Component({
  selector: 'ks-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') project: Card;
  @ViewChild('beforeTabs') beforeTabs: ElementRef;
  @ViewChild('angularTab') angularTab: ElementRef;
  @ViewChild('phpTab') phpTab: ElementRef;

  loadModalBody(data: string) {
    if(data.match(/URL Shortener/i)) {
      let tabStartIndex = data.indexOf('<!--Tab start-->');
      this.beforeTabs.nativeElement.innerHTML = data.substring(0, tabStartIndex);
      let tabSeperatorIndex = data.indexOf('<!--Tab seperator-->');
      this.angularTab.nativeElement.innerHTML = data.substring(tabStartIndex, tabSeperatorIndex);
      this.phpTab.nativeElement.innerHTML = data.substring(tabSeperatorIndex);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
