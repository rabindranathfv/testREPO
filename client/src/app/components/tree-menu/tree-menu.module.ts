import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeMenuComponent } from './tree-menu.component';
import { MatTreeModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TreeMenuComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TreeMenuComponent
  ]
})
export class TreeMenuModule { }
