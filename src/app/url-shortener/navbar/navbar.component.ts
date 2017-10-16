import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../user-authentication/shared/authentication.service';
import { TableHandlerService } from '../shared/table-handler.service';

@Component({
  selector: 'ks-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginTab = false;

  // Logout of current account and reset values
  logout() {
    this.authentication.logout();
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
