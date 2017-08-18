import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InteractiveResumeComponent } from './interactive-resume.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { UserAuthenticationModule } from '../user-authentication/user-authentication.module';
import { InteractiveResumeRoutingModule } from './interactive-resume-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    InteractiveResumeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    InteractiveResumeRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [

  ],
})
export class InteractiveResumeModule { }
