import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { NotFoundDialogComponent } from './not-found-dialog/not-found-dialog.component';

@Component({
  moduleId: module.id,
  selector: 'ks-url-shortener',
  templateUrl: 'url-shortener.component.html',
  styleUrls: ['url-shortener.component.scss']
})
export class UrlShortenerComponent implements OnInit {

  constructor(private router: Router,
              private dialog: MdDialog) { }

  ngOnInit() {
    if(this.router.url === "/null") {
      this.dialog.open(NotFoundDialogComponent);
    }
  }

}