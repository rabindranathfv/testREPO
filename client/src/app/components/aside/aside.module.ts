import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideComponent } from './aside.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

// modules
import { AsideFormModule } from './aside-form/aside-form.module';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from 'src/app/components/dynamic-form/dynamic-form.module';
import { GridModule } from 'src/app/components/grid/grid.module';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    MaterialModule,
    AsideFormModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    DynamicFormModule
  ],
  providers: [ ],
  declarations: [
    AsideComponent
  ],
  exports: [
    AsideComponent,
    GridModule,
    MaterialModule,
    AsideFormModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    DynamicFormModule
  ]
})
export class AsideModule { }
