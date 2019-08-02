import { Component, OnInit, Input } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { ModalsComponent } from 'src/app/components/modals/modals.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  public dataSet: any; // data to show in the view
  public tableDataSet: any; // data to show in the view
  public id: string;
  public customerData: any[]; // data for mix with definitor and send to Aside component
  public resource: string; // resource for API
  public objDetail = { }; // for get data of behaviorSubject
  public objUpdate = { }; // data for update to send to Aside
  public typeOperation: number;
  public formsDynamic: any; // Save data of definitors from API and with data to for show and update operations
  public data: {};
  public url: string;
  public datasCardBody: any; // Datas we want to display in 'card-body' component
  public columns: any; //Table column
  @Input() parentResource: string; // get the parent resource and id
  public attributes = {
    'plants': {
      icon: 'industry',
      name: 'plantas'
    },
    'users': {
      icon: 'user',
      name: 'usuarios'
    },
    'customers': {
      icon: 'users',
      name: 'clientes'
    },
    'inverters': {
      icon: 'th-large',
      name: 'inversores'
    },
    'solar_panels': {
      icon: 'sun-o',
      name: 'paneles'
    },
    'solar_panel_inverters': {
      icon: 'lightning',
      name: 'paneles-inversores'
    }
  };
  public steps: any;
  public stored_ids = [];
  public continueDisabled: boolean;
  public stepsCompleted: boolean;
  public log = [];

  constructor(
                private _dashboardService: DashboardService,
                public activatedRoute: ActivatedRoute,
                public router: Router,
                private location: Location,
                private dialog: MatDialog)
  {
                this.parentResource = this.activatedRoute.snapshot.paramMap.get("parent");
                this.resource = this.activatedRoute.snapshot.paramMap.get("resource");
                this.id = this.activatedRoute.snapshot.paramMap.get("id");
                this.url = this.activatedRoute.snapshot.data.url;
                this.continueDisabled = true;
                this.stepsCompleted = false;
                this.steps = ['inverters', 'solar_panel_inverters', 'solar_panels'];
  }

  ngOnInit() {
    this.getDataStructure();
    this.getDataCard();
    this.getDataTable();
  }

  public getDataStructure() {
    // cards info
    this._dashboardService.getFormBuilder(this.parentResource, 'show')
    .subscribe( (resp: any) => {
      this.datasCardBody = [...resp.object.object];
      console.log(this.datasCardBody);
    });

    // table info
    this._dashboardService.getTableInfo(this.resource)
        .subscribe( (resp: any) => {
          this.columns = [...resp.object.object];
    });
  }

  public getDataCard() {
    this._dashboardService.getDatas(`${this.parentResource}/${this.id}`)
    .subscribe(resp => {
      console.log(resp)
      this.dataSet = [...resp.object.object][0];
      this.dataSet.short_id = this.id.slice(-3);
      console.log(this.dataSet);
    });
  }

  public getDataTable() {
    this._dashboardService.getDatas(`${this.parentResource}/${this.id}/${this.resource}`)
    .subscribe(resp => {
        this.tableDataSet = [...resp.object.object];
    });
  }

  /**
   * getBack
   */
  public getBack() {
    this.router.navigateByUrl(`/${this.attributes[this.resource].name}`);
  }

  /**
  * defineFormCreate grabs the definitor from API and pass to the component
  * to modals component
  */
 public defineFormCreate( typeOperation: string, callback: any ) {
  this._dashboardService.getFormBuilder(this.resource, typeOperation)
      .subscribe( (resp: any) => {
         //console.log(resp);
         this.formsDynamic = resp.object.object.filter( (element: any) => {
           // console.log(element.required);
             // despues del fix de os cambiar la condicion por solo element.required
           return element.required === false;
         });
         this.formsDynamic = [...resp.object.object];
         //console.log(this.formsDynamic);
         callback(this.formsDynamic);
      });
 }

 /**
  * openModals for Create instance
  */
 public openModals( typeOperation: string ): void {
   console.log('*** CUSTOMER typeOperation ****', typeOperation);
   const dialogRef = this.dialog;
   this.defineFormCreate( typeOperation, resp => {
     // arreglo temporal para asignar el select con el dato seleccionado.
      resp.forEach(field => {
        if(['CustomerId', 'PlantId', 'InverterId', 'SolarPanelInverterId'].includes(field.label)){
          field.value = this.id;
        }
      });
     const OpendialogRef = dialogRef.open(ModalsComponent, {
       data: {
         name: 'new' + this.resource,
         resource: this.resource,
         typeOperation,
         datasToBuild: resp || null
        }
       });
     OpendialogRef.afterClosed().subscribe( (data: any) => {
       console.log('The dialog was closed');
       setTimeout(() => {
          let new_id = this._dashboardService.savedDatas.pop();
          if(new_id !== undefined) { 
           this.stored_ids.push(new_id);
           this.getDataTable();
           this.continueDisabled = this.resource == 'users' ? true : false;
           this.log.push(`Has creado el recurso ${this.resource} - (${new_id.slice(-3)}) asociado a ${this.parentResource}.`);
           console.log('ids', this.stored_ids);
          }
        }, 3500);
     });
   });
 }

  public continue() {
    if(this.steps.length == 0) {
      this.end();
      return;
    }
    this.id = this.stored_ids.pop();
    this.parentResource = this.resource;
    this.resource = this.steps.shift();
    this.ngOnInit();
    this.continueDisabled = true;
  }

  end() {
    this.stepsCompleted = true;
    this.continueDisabled = true;
    this.log.push('Has finalizado el proceso exitosamente.');
  }

}
