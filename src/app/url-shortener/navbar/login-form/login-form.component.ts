import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() onLogin = new EventEmitter<boolean>();

  modelEmail = "";
  modelPassword = ""; 

  // Login as existing user and set values
  loginHttp() {
    this.authentication.login(this.modelEmail, this.modelPassword).subscribe(
      (responseBody) => {
        // Store token in local storage
        localStorage.setItem('auth', JSON.stringify(responseBody));
        
        // Set values for new user using http response values
        this.authentication.currentUser.initializeUser(responseBody.user);

        // Emit event to tell parent component to close modal
        this.onLogin.emit(true);

        // Clear old values in form
        this.modelEmail = this.modelPassword = "";
      },
      (err: HttpErrorResponse) => {
        console.log("Error detected: " + err);
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
