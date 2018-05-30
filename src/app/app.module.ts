import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { InteractiveResumeModule } from './interactive-resume/interactive-resume.module';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import fontawesome from '@fortawesome/fontawesome';
import { faTh } from '@fortawesome/fontawesome-free-solid';
import { faCopy } from '@fortawesome/fontawesome-free-regular';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

fontawesome.library.add(faTh, faCopy, faGithub);

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InteractiveResumeModule,
    UrlShortenerModule,
    UserAuthenticationModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ Title ],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
