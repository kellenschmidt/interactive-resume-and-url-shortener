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
  logoutHttp() {
    this.authentication.logout().subscribe(
      (responseBody) => {
        // Reset currentUser
        this.authentication.currentUser.reset();

        // Remove authentication from local storage
        localStorage.removeItem('auth');

        // Refresh the links in the links table
        this.refreshTable();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to logout failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } //logoutHttp

  // Resend http request to update links in table
  refreshTable() {
    this.tableHandler.getLinks();
  }

  constructor(public authentication: AuthenticationService,
              private tableHandler: TableHandlerService) { }

  ngOnInit() {
  }

}
