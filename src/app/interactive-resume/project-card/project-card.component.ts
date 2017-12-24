import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../shared/types';

@Component({
  selector: 'ks-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input('project') project: Card;
  @ViewChild('mainDescription') mainDescription: ElementRef;
  @ViewChild('angularTab') angularTab: ElementRef;
  @ViewChild('phpTab') phpTab: ElementRef;
  isAngularTab: boolean = true;

  loadModalBody(data: string) {
    if(data.match(/URL Shortener/i)) {
      let tabStartIndex = data.indexOf('<!--Tab start-->');
      this.mainDescription.nativeElement.innerHTML = data.substring(0, tabStartIndex);
      let tabSeperatorIndex = data.indexOf('<!--Tab seperator-->');
      this.angularTab.nativeElement.innerHTML = data.substring(tabStartIndex, tabSeperatorIndex);
      this.phpTab.nativeElement.innerHTML = data.substring(tabSeperatorIndex);
    }
  }

  stripTrailingHtml(input: string): string {
    let firstHtml = input.indexOf('<');
    if(firstHtml > 0) {
      return input.substring(0, firstHtml);
    } else {
      return input;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
