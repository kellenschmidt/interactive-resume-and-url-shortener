import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UrlShortenerComponent } from './url-shortener.component';
import { LinkInputComponent } from './link-input/link-input.component';
import { LinkTableComponent } from './link-table/link-table.component';
<<<<<<< HEAD
import { USNavbarComponent } from './us-navbar/us-navbar.component';
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> master
import { RedirectComponent } from './redirect/redirect.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { UserAuthenticationModule } from '../user-authentication/user-authentication.module';
import { UrlShortenerRoutingModule } from './url-shortener-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LinkRepositoryService } from './shared/link-repository.service';
import { TableHandlerService } from './shared/table-handler.service';

@NgModule({
  declarations: [
    UrlShortenerComponent,
    LinkInputComponent,
    LinkTableComponent,
    USNavbarComponent,
    RedirectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    UserAuthenticationModule,
    UrlShortenerRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    LinkRepositoryService,
    TableHandlerService
  ],
})
export class UrlShortenerModule { }
