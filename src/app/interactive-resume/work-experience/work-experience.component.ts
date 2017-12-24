import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/types';
import { ContentRepositoryService } from '../shared/content-repository.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ks-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public jobs: Card[];
  
  constructor(private contentRepository: ContentRepositoryService) { }

  ngOnInit() {
    this.contentRepository.getCards(1).subscribe(
      (responseBody) => {
        this.jobs = responseBody['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for jobs failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  }
}
