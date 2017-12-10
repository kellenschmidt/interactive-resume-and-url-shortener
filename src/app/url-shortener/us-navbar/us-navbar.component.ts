import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user-authentication/shared/authentication.service';
import { TableHandlerService } from '../shared/table-handler.service';

@Component({
  selector: 'ks-us-navbar',
  templateUrl: './us-navbar.component.html',
  styleUrls: ['./us-navbar.component.scss']
})
export class USNavbarComponent implements OnInit {

  loginTab = false;

  // Logout of current account and reset values
  logout() {
    this.authentication.logout();
    this.refreshTable();
  }

  // Resend http request to update links in table
  refreshTable() {
    this.tableHandler.getLinks();
  }

  constructor(public authentication: AuthenticationService,
              private tableHandler: TableHandlerService) { }

  ngOnInit() {
  }

}
