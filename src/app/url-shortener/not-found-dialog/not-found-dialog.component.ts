import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  moduleId: module.id,
  selector: 'ks-not-found-dialog',
  templateUrl: 'not-found-dialog.component.html',
  styleUrls: ['not-found-dialog.component.scss']
})
export class NotFoundDialogComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<NotFoundDialogComponent>) { }

  ngOnInit() {
  }

}
