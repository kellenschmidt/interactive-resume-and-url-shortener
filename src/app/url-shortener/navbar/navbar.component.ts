import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../shared/user';

@Component({
  moduleId: module.id,
  selector: 'ks-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginTab = false;
  currentUser: User;
  email: string = "";
  name: string = "";
  phone: number = 0;
  password: string = "";
  passwordConfirm: string = "";

  // Create new user and set values
  registerHttp(longUrl: string) {
    this.authentication.register(this.email, this.name, this.phone, this.password).subscribe(
      (responseBody) => {
        // Store token in local storage
        localStorage.setItem('jwt', responseBody.token);

        // Set values for new user
        this.initializeUser(responseBody);

        // Clear old values in form
        this.clearForm();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to register failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } //registerHttp

  // Login as existing user and set values
  loginHttp(longUrl: string) {
    this.authentication.login(this.email, this.password).subscribe(
      (responseBody) => {
        // Store token in local storage
        localStorage.setItem('jwt', responseBody.token);
        
        // Set values for new user
        this.initializeUser(responseBody);

        // Clear old values in form
        this.clearForm();
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to login failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } //loginHttp

  // Logout of current account and reset values
  logoutHttp(longUrl: string) {
    this.authentication.logout().subscribe(
      (responseBody) => {
        // Reset currentUser
        this.currentUser = null;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to logout failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      } // error
    ) // http subscribe
  } //logoutHttp

  initializeUser(responseBody: any) {
    this.currentUser.email = responseBody.email;
    this.currentUser.name = responseBody.name;
    this.currentUser.phone = responseBody.phone;
    this.currentUser.creation_date = responseBody.creation_date;
    this.currentUser.updated_date = responseBody.updated_date;
    this.currentUser.verified_phone = responseBody.verified_phone;
  }

  clearForm() {
    this.email = "";
    this.name = "";
    this.phone = null;
    this.password = "";
    this.passwordConfirm = "";
  }

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

}
