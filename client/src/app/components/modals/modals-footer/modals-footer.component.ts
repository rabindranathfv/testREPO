import { Component, OnInit, Input, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup } from '@angular/forms';

// services
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { BehaviorSubject } from 'rxjs';
import { NotifBarMaterialComponent } from '../../notif-bar-material/notif-bar-material/notif-bar-material.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modals-footer',
  templateUrl: './modals-footer.component.html',
  styleUrls: ['./modals-footer.component.scss']
})
export class ModalsFooterComponent implements OnInit {

  @Input() resource: string;
  @Input() typeOperation: string;
  @Input() dataModel: any;
  @Input() globalForm: BehaviorSubject<any>;
  form: any;
  associationDatas: any; //datas to update association 
  isValid: boolean;

  constructor( public dialogRef: MatDialogRef<ModalsFooterComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
               private _dashboardService: DashboardService,
               private snackBar: MatSnackBar,
               public router: Router
  ) { }

  ngOnInit() {
    console.log(this.resource, this.typeOperation, this.dataModel);
    console.log(this.globalForm);
    this.isValid = false;
    this.listenFormChanges();
    this.listenAssociateChanges();
  }


  public listenFormChanges() {
    this._dashboardService.currentformSubject.subscribe( (dataForm) => {
      this.form = dataForm;
    });
  }

  public listenAssociateChanges() {
    this._dashboardService.currentAssociate.subscribe( (datas) => {
      this.associationDatas = datas;
    });
  }
  /**
   * save methods for create instances
   */
  public save() {
    console.log( this.form );
    // works for customers
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
    this.onSubmit( body );
    // this.onSubmit( this.form.value );
  }

  onSubmit( dataSubmit: any ) {
    // console.log(`ejecutnado el onSubmit con los siguientes parametros`);
    // console.log(`resource ${this.resource}`);
    // console.log(`this.form.valid value ${this.form.valid}`);
    console.log(`data submit`);
    console.log(dataSubmit);
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (this.form.valid) {
        this._dashboardService.createResource(this.resource, dataSubmit)
            .subscribe( (cust: any) => {
              console.log(cust);
              this._dashboardService.savedDatas.push(cust.object.object[0].id);
              this.dialogRef.close('summit and save data');
              this.openNotifBar('Se creó el recurso correctamente','notif-success');
            },
            (error: any) => {
              console.log(error);
              this.openNotifBar('Hubo un problema al crear el recurso.','notif-wrong');
            });
        this._dashboardService.getDatas(this.resource);
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
   * listenCustomerChanges with a behavior Subject implementation
   */
  public listenUsersChanges() {
    this._dashboardService.currentformSubject.subscribe( (dataForm) => {
      console.log('listenFormChanges');
      this.form = dataForm;
      console.log(this.form.status);
      if (this.form.status === 'INVALID') {
        this.isValid = false;
      } else {
        this.isValid = true;
      }
    });
  }

  // update methods
  public update( resource: any, id: any) {
      console.log('EDIT/UPDATE WORKS');
      console.log(this.form);
      this.listenFormChanges();
      this.updateDatas( this.form, id );
  }


  public updateDatas( data: any, id: number ) {
    // this.globalForm.subscribe( evt => {
      this._dashboardService.updateResource(this.resource, data, id)
        .subscribe( response => {
          console.log(response);
          console.log(`Update of ${id} succesffuly`);
          this.openNotifBar('Se editó correctamente','notif-success');
        });
    // });
  }

  /**
   * updateDevices
  */
  public updateDevice( data: any, id: number) {
    this.globalForm.subscribe( evt => {
      const body: any = {};
      const array = Object.keys(evt);
      for (let index = 0; index < array.length; index++) {
        const key = array[index];
        if ( evt[key] && key !== 'id') {
          body[key] = evt[key];
        }
      }
      // console.log(body);
      this._dashboardService.updateResource('hubs', body, id)
      .subscribe( response => {
        console.log(response);
        console.log(`El HUB que se actualizo es ${id}`);
        this.openNotifBar('Se editó correctamente','notif-success');
      });
      this.globalForm.unsubscribe();
    });
  }

  // delete methods

  public delete( id: number ) {
    this._dashboardService.deleteResource(this.resource, id )
        .subscribe( (resp: any) => {
          console.log(`the ${id} is deleted successfully`);
          this.openNotifBar('Se eliminó correctamente','notif-success');
        },
        (err) => {
          console.error(err);
          this.openNotifBar('No se pudo realizar la operación','notif-wrong');
        });
  }



  /**
   * Associate, Dissociate
   * 
   */
  public saveAssociation( plantId: number) {
    if(this.form.value.resource){
      delete this.form.value.resource;
    }
    this._dashboardService.updateAssociate( this.resource, plantId, this.form.value).subscribe( () => {
      this.openNotifBar('Se asoció correctamente','notif-success');
    }, (error) => {
      this.openNotifBar('No se pudo realizar la operación','notif-wrong');
    });
  }

  public openNotifBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(NotifBarMaterialComponent, {
        data: message,
        panelClass: panelClass,
        duration: 100000
    });
  }

  // public saveAssociationDev( devId: number, typeOperation?: string ) {
  //   const data: {} = {};
  //   console.log(this.globalForm.value);
  //   console.log(this.globalForm.value['id']);
  //   if (typeOperation === 'update') {
  //     data['dato'] = this.globalForm.value['id'];
  //     data['variable'] = `recinto_id`;
  //   } else {
  //     data['dato'] = null;
  //     data['variable'] = `recinto_id`;
  //   }
  //   console.log('**** data into saveAssociationDev *****', data);
  //   this._dashboardService.updateResource( this.resource, data , devId ).subscribe( () => {
  //     console.log(`update plant ${devId} with ${this.globalForm.value['id']}`);
  //   });
  // }


}
