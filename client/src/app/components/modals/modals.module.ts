import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ModalsComponent } from './modals.component';
import { ModalsHeaderComponent } from './modals-header/modals-header.component';
import { ModalsBodyComponent } from './modals-body/modals-body.component';
import { ModalsFooterComponent } from './modals-footer/modals-footer.component';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { MaterialModule } from '../material/material.module';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import {HttpClient} from '@angular/common/http';
import { ShowDataModule } from '../show-data/show-data.module';

@NgModule({
  declarations: [
    ModalsComponent,
    ModalsHeaderComponent,
    ModalsBodyComponent,
    ModalsFooterComponent
  ],
  /* for modals and dynamic forms */
  entryComponents: [
    ModalsComponent,
    ModalsHeaderComponent,
    ModalsBodyComponent,
    ModalsFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivesModule,
    MaterialModule,
    DynamicFormModule,
    ShowDataModule
  ],
  exports: [
    ModalsComponent,
    ModalsHeaderComponent,
    ModalsBodyComponent,
    ModalsFooterComponent,
    ShowDataModule
  ]
})
export class ModalsModule { }
// required for AOT compilation

