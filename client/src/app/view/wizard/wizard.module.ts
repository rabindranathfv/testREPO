import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard/wizard.component';
import { DirectivesModule } from 'src/app/directives/directives.module';
import { CardViewModule } from 'src/app/components/card-view/card-view.module';
import { HeaderTitleModule } from 'src/app/components/header-title/header-title.module';
import { MaterialModule } from 'src/app/components/material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormModule } from 'src/app/components/dynamic-form/dynamic-form.module';
import { AddResourceModalModule } from 'src/app/components/add-resource-modal/add-resource-modal.module';

@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    WizardRoutingModule,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule,
    AddResourceModalModule
  ],
  exports: [
    WizardRoutingModule,
    WizardComponent,
    DirectivesModule,
    CardViewModule,
    HeaderTitleModule,
    MaterialModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicFormModule
  ]
})
export class WizardModule { }
