import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../../shared/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../../../shared/user';

@Component({
  moduleId: module.id,
  selector: 'ks-register-form',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() onRegister = new EventEmitter<boolean>();

  modelUser: User = new User("" ,"", undefined, "", undefined, undefined, false);
  passwordConfirm: string = "";

  // Create new user and set values
  registerHttp() {
    this.authentication.register(this.modelUser.email, this.modelUser.name, this.modelUser.phone, this.modelUser.password).subscribe(
      (responseBody) => {
        // Store token in local storage
        localStorage.setItem('jwt', responseBody.token);

        // Set values for new user using values from model
        this.authentication.currentUser.initializeUser(this.modelUser);

        // Emit event to tell parent component to close modal
        this.onRegister.emit(true);

        // Clear old values in form
        this.modelUser.reset();
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

  clearForm() {
    this.modelUser = new User("", "", undefined, "", undefined, undefined, false);
    this.passwordConfirm = "";
  }

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

}
