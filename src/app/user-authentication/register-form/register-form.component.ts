import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyValidators } from '../shared/my-validators';
import { AuthenticationService } from '../shared/authentication.service';
import { User } from '../shared/user';

@Component({
  moduleId: module.id,
  selector: 'ks-register-form',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @Output() onRegister = new EventEmitter<boolean>();

  registerForm: FormGroup;
  public maskConfig = {
    mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    guide: false,
    placeholderChar: '\u2000',
    keepCharPositions: false,
  };

  // Create new user and set values
  registerHttp() {
    this.authentication.register(this.email.value, this.name.value.trim(), this.phone.value.replace(/[^\+\d][^\d]*/g, ""), this.password.value).subscribe(
      (responseBody) => {
        // Store token in local storage
        localStorage.setItem('auth', JSON.stringify(responseBody));

        // Set values for new user using values from model
        this.authentication.currentUser.initializeUser(responseBody.user);

        // Emit event to tell parent component to close modal
        this.onRegister.emit(true);

        // Clear old values in form
        this.registerForm.reset();
        // Reset value of password to avoid null value error when displaying current inputted length in form
        this.registerForm.controls['password'].setValue("");
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('Error: POST request to register failed:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          this.registerForm.get(err.error['element']).setErrors( {[err.error['error']]: true} );
        }
      } // error
    ) // http subscribe
  } //registerHttp

  createForm() {
    this.registerForm = this.fb.group({
      name: ["", [
        Validators.required,
      ]],
      phone: ["", [
        Validators.required,
      ]],
      email: ["", [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      ]],
      password: ["", [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/),
      ]],
      passwordConfirm: ["", [
        Validators.required,
      ]],
    },
    {
      validator: MyValidators.matchPassword
    });
  }

  get name() { return this.registerForm.get('name'); }
  get phone() { return this.registerForm.get('phone'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get passwordConfirm() { return this.registerForm.get('passwordConfirm'); }

  constructor(public authentication: AuthenticationService,
              private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

}
