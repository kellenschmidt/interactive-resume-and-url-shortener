import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InteractiveResumeComponent } from './interactive-resume.component';
import { IRNavbarComponent } from './ir-navbar/ir-navbar.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SkillsComponent } from './skills/skills.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { UserAuthenticationModule } from '../user-authentication/user-authentication.module';
import { InteractiveResumeRoutingModule } from './interactive-resume-routing.module';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as Cloudinary from 'cloudinary-core';

import { ContentRepositoryService } from './shared/content-repository.service';

@NgModule({
  declarations: [
    InteractiveResumeComponent,
    IRNavbarComponent,
    TitlePageComponent,
    AboutMeComponent,
    EducationComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    ProjectCardComponent,
    SkillsComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    InteractiveResumeRoutingModule,
    Ng2PageScrollModule,
    MDBBootstrapModule.forRoot(),
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: "kellenscloud", secure: true}),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ContentRepositoryService
  ],
})
export class InteractiveResumeModule { }
