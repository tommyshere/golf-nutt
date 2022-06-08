import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
})
export class MaterialModule {}
