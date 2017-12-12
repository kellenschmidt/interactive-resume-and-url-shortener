import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ks-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseGroups = [
    [
      {
        id: 0,
        number: "CSE 5345",
        name: "Advanced App Programming",
        lineBreaks: [1]
      },
      {
        id: 1,
        number: "CSE 5323",
        name: "Mobile Apps for Sensing and Learning",
        lineBreaks: [0]
      },
      {
        id: 2,
        number: "CSE 4345",
        name: "Software Engineering Principles",
        lineBreaks: [0]
      },
    ],
    [
      {
        id: 3,
        number: "CSE 3330",
        name: "Database Concepts",
        lineBreaks: [2]
      },
      {
        id: 4,
        number: "CSE 2341",
        name: "Data Structures",
        lineBreaks: [2]
      },
      {
        id: 5,
        number: "CSE 3345",
        name: "Graphical User Interface Design",
        lineBreaks: [1]
      },
    ],
  ]

  constructor() {
    // Convert lineBreaks from array with count of line breaks desired to array with size of line breaks desired
    // i.e. [3] => [0,0,0]
    for(var i=0; i<this.courseGroups.length; i++) {
      for(var j=0; j<this.courseGroups[i].length; j++) {
        var numLineBreaks = this.courseGroups[i][j].lineBreaks[0];
        this.courseGroups[i][j].lineBreaks = Array(numLineBreaks).fill(0);
      }
    }
  }

  ngOnInit() {
  }

}
