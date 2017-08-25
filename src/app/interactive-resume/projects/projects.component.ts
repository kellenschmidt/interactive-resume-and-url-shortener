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
  @ViewChild('modalBody') modalBody: ElementRef;
  
  loadModalBody(data) {
    this.modalBody.nativeElement.innerHTML = data;
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
