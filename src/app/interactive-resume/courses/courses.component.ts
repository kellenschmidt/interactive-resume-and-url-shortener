import { Component, OnInit } from '@angular/core';
import { ContentRepositoryService } from '../shared/content-repository.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Course } from 'app/interactive-resume/shared/types';

@Component({
  selector: 'ks-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseGroups: Course[][];
  
  expandArray(courseGroups: Course[][]) {
    // Convert lineBreaks from array with count of line breaks desired to array with size of line breaks desired
    // i.e. [3] => [0,0,0]
    for(var i=0; i<courseGroups.length; i++) {
      for(var j=0; j<courseGroups[i].length; j++) {
        var numLineBreaks = courseGroups[i][j].line_breaks[0];
        courseGroups[i][j].line_breaks = Array(numLineBreaks).fill(0);
      }
    }
    return courseGroups;
  }

  constructor(private contentRepository: ContentRepositoryService) { }

  ngOnInit() {
    this.contentRepository.getCourses().subscribe(
      (responseBody) => {
        this.courseGroups = this.expandArray(responseBody['data']);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: GET request for courses failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ); // http subscribe
  }

}
