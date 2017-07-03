import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { RedirectComponent } from './redirect/redirect.component';
import { NavbarComponent } from './url-shortener/navbar/navbar.component';
import { LinkInputComponent } from './url-shortener/link-input/link-input.component';
import { LinkTableComponent } from './url-shortener/link-table/link-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UrlShortenerComponent,
    RedirectComponent,
    NavbarComponent,
    LinkInputComponent,
    LinkTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
