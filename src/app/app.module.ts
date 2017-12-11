import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { InteractiveResumeModule } from './interactive-resume/interactive-resume.module';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
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
