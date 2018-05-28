import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/types';
import { ContentRepositoryService } from '../shared/content-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';

@Component({
  selector: 'ks-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: Card[];
  public projectsUrl: String;

  constructor(private contentRepository: ContentRepositoryService) {
    this.projectsUrl = environment.projectsUrl;
  }

  ngOnInit() {
    this.contentRepository.getCards(0).subscribe(
      (responseBody) => {
        this.projects = responseBody['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for projects failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ); // http subscribe
  }

}
