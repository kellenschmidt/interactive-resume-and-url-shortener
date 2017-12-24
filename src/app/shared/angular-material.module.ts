import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatSnackBarModule, MatTooltipModule, MatMenuModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatInputModule, MatProgressSpinnerModule, MatTabsModule } from '@angular/material';

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
  ],
})
export class AngularMaterialModule { }