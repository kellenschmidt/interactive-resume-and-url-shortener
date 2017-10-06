import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatInputModule, MatProgressSpinnerModule, MatTabsModule, MatChipsModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatChipsModule,
    CdkTableModule,
  ],
  exports: [
    MatSnackBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    CdkTableModule,
  ],
})
export class AngularMaterialModule { }