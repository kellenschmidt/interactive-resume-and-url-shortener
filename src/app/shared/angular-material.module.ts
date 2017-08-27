import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdSnackBarModule, MdTooltipModule, MdMenuModule, MdTableModule, MdDialogModule, MdPaginatorModule, MdSortModule, MdInputModule, MdProgressSpinnerModule, MdTabsModule, MdChipsModule } from '@angular/material';
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
    MdTabsModule,
    MdChipsModule,
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
    MdTabsModule,
    CdkTableModule,
  ],
})
export class AngularMaterialModule { }