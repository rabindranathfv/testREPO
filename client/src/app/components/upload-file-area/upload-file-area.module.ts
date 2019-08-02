import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileAreaComponent } from './upload-file-area/upload-file-area.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UploadFileAreaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [UploadFileAreaComponent]
})
export class UploadFileAreaModule { }
