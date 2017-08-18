import { NgModule } from '@angular/core';

import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    TextMaskModule,
  ],
  providers: [
    AuthenticationService,
  ],
})
export class UserAuthenticationModule { }
