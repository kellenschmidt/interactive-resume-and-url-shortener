import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './shared/authentication.service';
import { TableHandlerService } from '../url-shortener/shared/table-handler.service';
import { LinkRepositoryService } from '../url-shortener/shared/link-repository.service';

@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
    TextMaskModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild([]),
  ],
  exports: [
    RegisterFormComponent,
    LoginFormComponent,
    NavbarComponent,
  ],
  providers: [
    AuthenticationService,
    TableHandlerService,
    LinkRepositoryService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
  ]
})
export class UserAuthenticationModule { }
