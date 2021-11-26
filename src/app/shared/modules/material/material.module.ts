import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatListModule
  ],
  exports:[
    MatDialogModule,
    MatListModule
  ]
})
export class MaterialModule { }
