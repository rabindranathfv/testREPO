import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowDataJsonComponent } from './show-data-json/show-data-json.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ShowDataJsonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ShowDataJsonComponent
  ]
})
export class ShowDataJsonModule { }
