import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { InteractiveResumeComponent } from './interactive-resume.component';
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
import { AngularMaterialModule } from '../shared/angular-material.module';
import { UserAuthenticationModule } from 'src/app/user-authentication/user-authentication.module';
import { InteractiveResumeRoutingModule } from './interactive-resume-routing.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ContentRepositoryService } from './shared/content-repository.service';

@NgModule({
  declarations: [
    InteractiveResumeComponent,
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
    UserAuthenticationModule,
    InteractiveResumeRoutingModule,
    ScrollToModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    ContentRepositoryService
  ],
})
export class InteractiveResumeModule { }
