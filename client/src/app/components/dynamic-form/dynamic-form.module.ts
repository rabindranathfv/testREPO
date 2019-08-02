import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../dynamic-form/dynamic-components/input/input.component';
import { ButtonComponent } from '../dynamic-form/dynamic-components/button/button.component';
import { SelectComponent } from '../dynamic-form/dynamic-components/select/select.component';
import { DateComponent } from '../dynamic-form/dynamic-components/date/date.component';
import { RadiobuttonComponent } from '../dynamic-form/dynamic-components/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../dynamic-form/dynamic-components/checkbox/checkbox.component';
import { JsonSelectComponent } from './dynamic-components/jsonSelect/jsonSelect.component';
import { DynamicFormComponent } from './dynamic-form.component';

// Modules
import { DirectivesModule } from 'src/app/directives/directives.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardStepperComponent } from './dynamic-components/wizard-stepper/wizard-steeper.component';
import { DataSelectComponent } from './dynamic-components/dataSelect/dataSelect.component';
import { InputReadonlyComponent } from './dynamic-components/input-readonly/input-readonly.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    JsonSelectComponent,
    WizardStepperComponent,
    DynamicFormComponent,
    DataSelectComponent,
    InputReadonlyComponent
  ],
  entryComponents: [
    InputComponent,
    InputReadonlyComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    JsonSelectComponent,
    WizardStepperComponent,
    DynamicFormComponent,
    DataSelectComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    JsonSelectComponent,
    WizardStepperComponent,
    DynamicFormComponent,
    DirectivesModule,
    MaterialModule,
    DataSelectComponent,
    InputReadonlyComponent
  ]
})
export class DynamicFormModule { }
