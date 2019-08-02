import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderTitleComponent} from './header-title.component';
import {LoaderModule} from '../loader/loader.module';
import {MaterialModule} from '../material/material.module';
@NgModule({
  declarations: [
    HeaderTitleComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    MaterialModule
  ],
  exports: [
    HeaderTitleComponent,
    LoaderModule,
    MaterialModule
  ]
})
export class HeaderTitleModule { }
