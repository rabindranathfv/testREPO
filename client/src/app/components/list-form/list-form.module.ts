import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFormComponent } from './list-form.component';
import { MatListModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    FormsModule,
    MatInputModule

  ],
  declarations: [ListFormComponent],
  entryComponents: [ListFormComponent],
  exports: [ListFormComponent],
})
export class ListFormModule { }
