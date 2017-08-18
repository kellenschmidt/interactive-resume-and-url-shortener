import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdSnackBarModule, MdTooltipModule, MdMenuModule, MdTableModule, MdDialogModule, MdPaginatorModule, MdSortModule, MdInputModule, MdProgressSpinnerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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