import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../../interfaces/forms/field.interface';
import { DynamicFormComponent } from '../../dynamic-form.component';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-wizard-stepper',
  template: `
  <mat-horizontal-stepper labelPosition="bottom" linear #stepper>

      <ng-container *ngFor="let step of field.wizard; let i=index">
          <mat-step [stepControl]="group">
             <ng-template matStepLabel>{{ step.labelStepper }}</ng-template>
             <div class="form-container">
                     <app-dynamic-form #dynForm
                         [externalSubscriber]="group"
                         [resource]="step.resource"
                         [fields]="step.fields"
                         (submit)="submit($event)">
                     </app-dynamic-form>
                 </div>
                 <ng-container *ngIf="i === 0">
                    <div>
                        <button mat-button matStepperNext>Next</button>
                        <button mat-button (click)="save( step.resource )">Crear</button>
                    </div>
                  </ng-container>

                  <ng-container *ngIf="step.typeOperation === 'association'; else elseTemplate">
                    <ng-container *ngIf="(i > 0) && (i < field.wizard.length - 1)">
                      <button mat-button matStepperNext>Next</button>
                      <button mat-button (click)="association( step.resource )">Asociar</button>
                      <button mat-button matStepperPrevious>Back</button>
                    </ng-container>
                  </ng-container>
                  <ng-template #elseTemplate>
                    <ng-container *ngIf="(i > 0) && (i < field.wizard.length - 1)">
                      <button mat-button matStepperNext>Next</button>
                      <button mat-button (click)="save( step.resource)">Crear</button>
                      <button mat-button matStepperPrevious>Back</button>
                    </ng-container>
                  </ng-template>

                  <ng-container *ngIf="i === field.wizard.length - 1">
                    <div>
                        <div class="success-wizard">
                          <i class="fa fa-check-circle-o fa-5x" aria-hidden="true"></i>
                          <p>A culminado el registro asistido exitosamente</p>
                        </div>
                        <button mat-button matStepperPrevious>Back</button>
                        <button mat-button (click)="stepper.reset()">Reset</button>
                    </div>
                  </ng-container>
          </mat-step>
      </ng-container>

</mat-horizontal-stepper>
  `,
  styles: [
    `

      .form-container {
        margin-left: 10px;
        margin-top: 10px;
        max-width: 1200px;
      }

      .success-wizard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #E95A15;
      }
    `
  ]
})
export class WizardStepperComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  stepperList: object[];
  @ViewChild('dynForm') form: DynamicFormComponent;

  constructor( private _dashboardService: DashboardService) {
   }

  ngOnInit() {  }

  /**
   * syncronizeDataForm
   */
  public syncronizeDataForm() {
    this._dashboardService.currentformSubject.subscribe( (resp) => {
      console.log(resp);
      // checking errors type
      this.form['value'] = resp['value'];
      this.form['status'] = resp['status'];
      console.log(this.form);
    });
  }

  /**
   * save methods for create instances
   */
  public save( resource: string) {
    // console.log( this.form );
    this.syncronizeDataForm();
    const body = {};
    const keys = Object.keys(this.form.value);
    const objs = keys.filter( key => {
      const value = this.form.value[key];
      return !!value;
    });
    console.log(objs);
    for (let index = 0; index < objs.length; index++) {
      const key = objs[index];
      body[key] = this.form.value[key];
    }
    console.log(body);
    this.onSubmit( body, resource );
    // this.onSubmit( this.form.value );
  }

  onSubmit( dataSubmit: any, resource: string ) {
    // console.log(`ejecutnado el onSubmit con los siguientes parametros`);
    console.log(`resource ${resource}`);
    // console.log(`data submit`);
    // console.log(dataSubmit);
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.form['status'] === 'VALID') {
        this._dashboardService.createResource(resource, dataSubmit)
            .subscribe( (cust: any) => {
              console.log(cust);
            },
            (error: any) => {
              console.log(error);
            });
        this._dashboardService.getDatas(resource);
    } else {
      console.log(dataSubmit);
      // this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }


  /**
   * association
   */
  public association( resource: string) {
    console.log(resource);
  }
}
