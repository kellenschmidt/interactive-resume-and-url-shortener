import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/types';
import { ContentRepositoryService } from '../shared/content-repository.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ks-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills: Skill[] = [];

  constructor(private contentRepository: ContentRepositoryService) { }

  ngOnInit() {
    this.contentRepository.getChips().subscribe(
      (responseBody) => {
        this.skills = responseBody['data'];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for chips failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ); // http subscribe
  }
  
}
