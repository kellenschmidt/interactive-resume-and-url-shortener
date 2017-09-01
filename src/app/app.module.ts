import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule, Title } from '@angular/platform-browser';
import { InteractiveResumeModule } from './interactive-resume/interactive-resume.module';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { AppRoutingModule } from './app-routing.module';
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
    InteractiveResumeModule,
    UrlShortenerModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
