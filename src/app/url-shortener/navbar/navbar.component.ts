import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/user';
import { TableHandlerService } from '../table-handler.service';

@Component({
  moduleId: module.id,
  selector: 'ks-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
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
