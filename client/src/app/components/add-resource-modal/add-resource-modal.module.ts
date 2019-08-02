import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddResourceModalComponent } from './add-resource-modal/add-resource-modal.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddResourceModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [MaterialModule, AddResourceModalComponent]
})
export class AddResourceModalModule { }
