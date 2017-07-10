import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ks-url-shortener',
  templateUrl: 'url-shortener.component.html',
  styleUrls: ['url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  longUrl : string = "";

  onSubmit() {
    alert("Submitted!");
  }

  constructor() { }

  ngOnInit() {
  }

}
