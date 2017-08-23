import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InteractiveResumeComponent } from './interactive-resume.component';
import { IRNavbarComponent } from './ir-navbar/ir-navbar.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me/about-me.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { UserAuthenticationModule } from '../user-authentication/user-authentication.module';
import { InteractiveResumeRoutingModule } from './interactive-resume-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as Cloudinary from 'cloudinary-core';

@NgModule({
  declarations: [
    InteractiveResumeComponent,
    IRNavbarComponent,
    TitlePageComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    InteractiveResumeRoutingModule,
    MDBBootstrapModule.forRoot(),
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: "kellenscloud", secure: true}),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
})
export class InteractiveResumeModule { }
