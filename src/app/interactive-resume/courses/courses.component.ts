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
      name: "Advanced App Programming"
      },
      {
        id: 1,
        number: "CSE 5323",
        name: "Mobile Apps for Sensing and Learning"
      },
      {
        id: 2,
        number: "CSE 4345",
        name: "Software Engineering Principles"
      },
    ],
    [
      {
        id: 3,
        number: "CSE 3330",
        name: "Database Concepts"
      },
      {
        id: 4,
        number: "CSE 2341",
        name: "Data Structures"
      },
      {
        id: 5,
        number: "CSE 3345",
        name: "Graphical User Interface Design"
      },
    ],
  ]

  constructor() { }

  ngOnInit() {
  }

}
