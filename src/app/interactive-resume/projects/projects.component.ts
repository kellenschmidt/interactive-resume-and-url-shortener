import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Card } from '../shared/card';
import { CardRepositoryService } from '../shared/card-repository.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  moduleId: module.id,
  selector: 'ks-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Card[];
  @ViewChild('normalModalBody') modalBody: ElementRef;
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

  constructor(private cardRepository: CardRepositoryService) { }

  ngOnInit() {
    this.cardRepository.getCards(0).subscribe(
      (responseBody) => {
        this.projects = responseBody['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: PUT request for long URL failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  }

}
