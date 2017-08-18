import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { UrlShortenerModule } from './url-shortener/url-shortener.module';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';
import { AngularMaterialModule } from './shared/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    UrlShortenerModule,
    UserAuthenticationModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
