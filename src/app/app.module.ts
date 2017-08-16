import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdSnackBarModule, MdTooltipModule, MdMenuModule, MdTableModule, MdDialogModule, MdPaginatorModule, MdSortModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk';
import { TextMaskModule } from 'angular2-text-mask';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AppRoutingModule } from './app-routing.module';
import { LinkTableComponent } from './url-shortener/link-table/link-table.component';
import { NavbarComponent } from './url-shortener/navbar/navbar.component';
import { LinkInputComponent } from './url-shortener/link-input/link-input.component';
import { LinkRepositoryService } from './shared/link-repository.service';
import { TableHandlerService } from './url-shortener/table-handler.service';
import { NotFoundDialogComponent } from './url-shortener/not-found-dialog/not-found-dialog.component';
import { AuthenticationService } from './shared/authentication.service';
import { RegisterFormComponent } from './url-shortener/navbar/register-form/register-form.component';
import { LoginFormComponent } from './url-shortener/navbar/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenerComponent,
    RedirectComponent,
    LinkTableComponent,
    NavbarComponent,
    LinkInputComponent,
    NotFoundDialogComponent,
    RegisterFormComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdMenuModule,
    BrowserAnimationsModule,
    MdTableModule,
    MdDialogModule,
    CdkTableModule,
    MdPaginatorModule,
    MdSortModule,
    MdInputModule,
    ReactiveFormsModule,
    MdProgressSpinnerModule,
    TextMaskModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    LinkRepositoryService,
    AuthenticationService,
    TableHandlerService
  ],
  entryComponents: [NotFoundDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
