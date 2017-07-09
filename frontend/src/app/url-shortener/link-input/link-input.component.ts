import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'link-input',
  templateUrl: 'link-input.component.html',
  styleUrls: ['link-input.component.scss']
})
export class LinkInputComponent implements OnInit {

  longUrl : string = "";

  onSubmit() {
    alert("Submitted!");
  }

  constructor() { }

  ngOnInit() {
  }

}
