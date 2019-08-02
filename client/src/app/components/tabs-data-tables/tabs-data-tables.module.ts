import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsDataTablesComponent } from './tabs-data-tables.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TabsDataTablesComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TabsDataTablesComponent
  ]
})
export class TabsDataTablesModule { }