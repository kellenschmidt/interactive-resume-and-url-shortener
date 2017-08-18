import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSnackBarModule, MdTooltipModule, MdMenuModule, MdTableModule, MdDialogModule, MdPaginatorModule, MdSortModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  declarations: [],
  imports: [
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