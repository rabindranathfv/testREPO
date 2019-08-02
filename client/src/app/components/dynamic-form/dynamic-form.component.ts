import { Component,  EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FieldConfig, Validator } from '../../interfaces/forms/field.interface';

// services
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-dynamic-form',
  template: `
  <div>
    <form [formGroup]="form" (submit)="onSubmit($event)">
      <ng-container *ngFor="let field of fields;" appDynamicField [field]="field" [group]="form">
      </ng-container>
    </form>
  </div>
  `,
  styles: [``]

})
export class DynamicFormComponent implements OnInit {
  
  @Input() fields: FieldConfig[] = [];
  @Input() resource: string;
  @Input() selectedId: string;

  @Output() submit = new EventEmitter<any>();

  @Input() externalSubscriber: BehaviorSubject<any>;
  form: FormGroup;
  valid: any;
  constructor( private fb: FormBuilder,
               private _dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    this.form = this.createControl();
    this.form.valueChanges.subscribe( (resp: any) => {
      console.log(resp);
    });
    this.form.statusChanges.subscribe( (resp: any) => {
      if ( resp === 'VALID') {
        console.log(this.form);
        this._dashboardService.changesForm( this.form, this.resource );
      }
    });
  }
  value(value: any) {
    throw new Error('Method not implemented.');
  }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      console.log('*** emitiendo valores del form *****', this.form.value);
      this.submit.emit(this.form.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      if ( field.type === 'button') {
        return;
      }
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach( valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

}
