import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatIconModule, MatTableModule, MatSnackBarModule,
  MatGridListModule, MatCardModule, MatTabsModule, MatCheckboxModule, MatTooltipModule,
  MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatDialogModule, MatMenuModule, MatProgressSpinnerModule, MatSlideToggleModule
} from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule],

  exports: [MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatSnackBarModule],
})
export class MaterialModule { }
