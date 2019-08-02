import {
  Directive,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../interfaces/forms/field.interface';

// components to draw
import { InputComponent } from '../../components/dynamic-form/dynamic-components/input/input.component';
import { ButtonComponent } from '../../components/dynamic-form/dynamic-components/button/button.component';
import { SelectComponent } from '../../components/dynamic-form/dynamic-components/select/select.component';
import { DateComponent } from '../../components/dynamic-form/dynamic-components/date/date.component';
import { RadiobuttonComponent } from '../../components/dynamic-form/dynamic-components/radiobutton/radiobutton.component';
import { CheckboxComponent } from '../../components/dynamic-form/dynamic-components/checkbox/checkbox.component';
import { JsonSelectComponent } from 'src/app/components/dynamic-form/dynamic-components/jsonSelect/jsonSelect.component';
import { WizardStepperComponent } from 'src/app/components/dynamic-form/dynamic-components/wizard-stepper/wizard-steeper.component';
import { DataSelectComponent } from 'src/app/components/dynamic-form/dynamic-components/dataSelect/dataSelect.component';
import { InputReadonlyComponent } from 'src/app/components/dynamic-form/dynamic-components/input-readonly/input-readonly.component';

const componentMapper = {
  input: InputComponent,
  inputreadonly: InputReadonlyComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbutton: CheckboxComponent,
  json: JsonSelectComponent,
  stepper: WizardStepperComponent,
  dataselect: DataSelectComponent
};

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;

  constructor( private resolver: ComponentFactoryResolver,
               private container: ViewContainerRef
  ) { }

  ngOnInit(): void {
    // console.log(`el tipo de formulario a dibujarse sera ${this.field.type} y el nombre del campo es ${this.field.name}`);
    const factory = this.resolver.resolveComponentFactory( componentMapper[this.field.type] );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }

}
