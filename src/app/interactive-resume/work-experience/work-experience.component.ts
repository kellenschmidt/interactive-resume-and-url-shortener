import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card';
import { CardRepositoryService } from '../shared/card-repository.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ks-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {

  public jobs: Card[];
  
  constructor(private cardRepository: CardRepositoryService) { }

  ngOnInit() {
    this.cardRepository.getCards(1).subscribe(
      (responseBody) => {
        this.jobs = responseBody['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: PUT request for jobs failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  }
}
