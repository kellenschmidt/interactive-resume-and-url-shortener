import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/user';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../../shared/authentication.service';

@Component({
  moduleId: module.id,
  selector: 'ks-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  modelEmail = "";
  modelPassword = ""; 

  // Login as existing user and set values
  loginHttp() {
    this.authentication.login(this.modelEmail, this.modelPassword).subscribe(
      (responseBody) => {
        // Store token in local storage
        console.log("Response body: " + responseBody);
        localStorage.setItem('jwt', responseBody['token']);
        console.log("Token from storage: " + localStorage.getItem('jwt'));

        // Set values for new user using http response values
        this.authentication.currentUser.initializeUser(responseBody);

        // Clear old values in form
        this.modelEmail = this.modelPassword = "";
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

  constructor(public authentication: AuthenticationService) { }

  ngOnInit() {
  }

}
