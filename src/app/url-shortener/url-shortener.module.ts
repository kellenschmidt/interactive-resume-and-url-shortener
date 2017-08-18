import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { UrlShortenerComponent } from './url-shortener.component';
import { LinkInputComponent } from './link-input/link-input.component';
import { LinkTableComponent } from './link-table/link-table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NotFoundDialogComponent } from './not-found-dialog/not-found-dialog.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { UrlShortenerRoutingModule } from './url-shortener-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LinkRepositoryService } from './shared/link-repository.service';
import { TableHandlerService } from './shared/table-handler.service';

@NgModule({
  declarations: [
    UrlShortenerComponent,
    LinkInputComponent,
    LinkTableComponent,
    NavbarComponent,
    RedirectComponent,
    NotFoundDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    UrlShortenerRoutingModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    LinkRepositoryService,
    TableHandlerService
  ],
  entryComponents: [NotFoundDialogComponent],
})
export class UrlShortenerModule { }
