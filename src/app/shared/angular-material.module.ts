import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSnackBarModule, MdTooltipModule, MdMenuModule, MdTableModule, MdDialogModule, MdPaginatorModule, MdSortModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdMenuModule,
    MdTableModule,
    MdDialogModule,
    MdPaginatorModule,
    MdSortModule,
    MdInputModule,
    MdProgressSpinnerModule,
    CdkTableModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MdSnackBarModule,
    MdTooltipModule,
    MdMenuModule,
    MdTableModule,
    MdDialogModule,
    MdPaginatorModule,
    MdSortModule,
    MdInputModule,
    MdProgressSpinnerModule,
    CdkTableModule,
  ],
})
export class AngularMaterialModule { }