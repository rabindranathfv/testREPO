import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material';
import { ModalsComponent } from '../../modals/modals.component';
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

// interfaces
import { FieldConfig } from 'src/app/interfaces/field.interface';

import { ChangeDetectionStrategy } from '@angular/core';

interface AsideInfo {
  id: number;
  typeData: string;
  formsDynamic?: any;
}

@Component({
  selector: 'app-aside-form',
  templateUrl: './aside-form.component.html',
  styleUrls: ['./aside-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class AsideFormComponent implements OnInit {
  @Input() id: number;
  @Input() typeData: string;
  @Input() dataModel: any;
  formData: any = [];

  objDetail: AsideInfo;

  checkedDevice = false;
  @ViewChild('dynForm') form: DynamicFormComponent;
  regConfig: FieldConfig[] = [];

  /* regConfig: FieldConfig[] = [
    {
      type: 'input',
      label: 'name',
      inputType: 'text',
      name: 'nombre',
      required: false,
      disabled: true,
    },
    {
      type: 'input',
      label: 'rut',
      inputType: 'number',
      name: 'rut',
      minlength: 8,
      required: false,
      disabled: true,
    },
    {
      type: 'input',
      label: 'Email Address',
      inputType: 'email',
      name: 'mail',
      required: false,
      disabled: true,
    },
    {
      type: 'input',
      label: 'Password',
      inputType: 'password',
      name: 'password',
      required: false,
      disabled: true,
    },
    {
      type: 'radiobutton',
      label: 'Gender',
      name: 'gender',
      options: ['Male', 'Female'],
      value: 'Male',
      required: false,
      disabled: true,
    },
    {
      type: 'date',
      label: 'DOB',
      name: 'dob',
      required: false,
      disabled: true,
    },
    {
      type: 'datetime',
      label: 'DOB',
      name: 'dob',
      required: false,
      disabled: true,
    },
    {
      type: 'select',
      label: 'Country',
      name: 'country',
      required: false,
      disabled: true,
      value: 'UK',
      options: ['India', 'UAE', 'UK', 'US']
    },
    {
      type: 'checkbox',
      label: 'Accept Terms',
      name: 'term',
      value: true,
      required: false,
      disabled: true,
    }
  ]; */

  constructor(
    private _dashboardService: DashboardService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {

    // this.getFormDataById();
    this.getRegConfig();
  }

  // get data types for create form dynamicly
  public getRegConfig() {
    this.regConfig = [...this.objDetail.formsDynamic];
    console.log(this.regConfig);
  }


  public openModals(): void {
    const dialogRef = this.dialog.open(ModalsComponent, {
      data: {
        typeModal: this.typeData,
        title: ' TITULO',
        showOperationModal: false
      }
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      console.log('The dialog was closed');
    });
  }

  /**
   * openModalsByOperation
   */
  public openModalsByOperationAside(idD: number, typeOperationM?, nameD?) {
    const dialogRef = this.dialog.open(ModalsComponent, {
      data: {
        typeModal: this.typeData,
        typeOperation: typeOperationM,
        showOperationModal: true,
        id: idD,
        name: nameD
      }
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      console.log('The dialog was closed');
    });
  }
}
