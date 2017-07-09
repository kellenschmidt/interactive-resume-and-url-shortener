import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenerComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
