import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';

import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
  ],
  exports: [
    NavbarComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class SharedModule { }