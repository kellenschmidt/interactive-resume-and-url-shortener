import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UrlShortenerComponent } from './url-shortener.component';
import { LinkInputComponent } from './link-input/link-input.component';
import { LinkTableComponent } from './link-table/link-table.component';
import { USNavbarComponent } from './us-navbar/us-navbar.component';
import { RedirectComponent } from './redirect/redirect.component';

import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserAuthenticationModule,
    UrlShortenerRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    LinkRepositoryService,
    TableHandlerService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class UrlShortenerModule { }
