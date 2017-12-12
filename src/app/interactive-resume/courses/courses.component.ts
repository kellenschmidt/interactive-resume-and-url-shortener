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

  courseGroups: Course[][] = [
    [
      {
        course_id: 0,
        number: "CSE 5345",
        name: "Advanced App Programming",
        line_breaks: [1]
      },
      {
        course_id: 1,
        number: "CSE 5323",
        name: "Mobile Apps for Sensing and Learning",
        line_breaks: [0]
      },
      {
        course_id: 2,
        number: "CSE 4345",
        name: "Software Engineering Principles",
        line_breaks: [0]
      },
    ],
    [
      {
        course_id: 3,
        number: "CSE 3330",
        name: "Database Concepts",
        line_breaks: [2]
      },
      {
        course_id: 4,
        number: "CSE 2341",
        name: "Data Structures",
        line_breaks: [2]
      },
      {
        course_id: 5,
        number: "CSE 3345",
        name: "Graphical User Interface Design",
        line_breaks: [1]
      },
    ],
  ]

  constructor(private contentRepository: ContentRepositoryService) {
    // Convert lineBreaks from array with count of line breaks desired to array with size of line breaks desired
    // i.e. [3] => [0,0,0]
    for(var i=0; i<this.courseGroups.length; i++) {
      for(var j=0; j<this.courseGroups[i].length; j++) {
        var numLineBreaks = this.courseGroups[i][j].line_breaks[0];
        this.courseGroups[i][j].line_breaks = Array(numLineBreaks).fill(0);
      }
    }
  }

  ngOnInit() {
    this.contentRepository.getCourses().subscribe(
      (responseBody) => {
        this.courseGroups = responseBody['courseGroups'];
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
