import { Component, OnInit } from '@angular/core';

import { DevicesService } from 'src/app/services/devices/devices.service';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalsComponent } from 'src/app/components/modals/modals.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  public dataSet: any; // data to show in the view
  public id: number;
  public customerData: any[]; // data for mix with definitor and send to Aside component
  public resource: string; // resource for API
  public objDetail = { }; // for get data of behaviorSubject
  public objUpdate = { }; // data for update to send to Aside
  public typeOperation: number;
  public formsDynamic: any; // Save data of definitors from API and with data to for show and update operations
  public data: {};
  public url: string;
  public datasCardBody: any; // Datas we want to display in 'card-body' component
  public checkBoxCardTitle: boolean;
  public searchInput: string;
  public searchFields = []; // Fields for the filter searcher pipe.
  public viewAsTable: boolean; // Boolean for option visualization
  public columns: any; //Table column
  
  public actionsBtn: any = [
    {
      iconType: 'fa',
      icon: 'fa fa-info',
      typeOperation: 'show',
      toolTip: 'Show details',
    },
    {
      iconType: 'fa',
      icon: 'fa fa-pencil',
      typeOperation: 'edit',
      toolTip: 'Edit',
    },
    {
      iconType: 'fa',
      icon: 'fa fa-trash',
      typeOperation: 'delete',
      toolTip: 'Delete',
    },

  ];

  constructor( private _devicesService: DevicesService,
               private _dashboardService: DashboardService,
               public activatedRoute: ActivatedRoute,
               public router: Router,
               private dialog: MatDialog
  ) {
    this.url = this.activatedRoute.snapshot.data.url;
    this.resource = this.activatedRoute.snapshot.data.resource;
    this.datasCardBody = [
      { key: 'name', type: 'string', label: 'Nombre' },
      { key: 'plant_id', type: 'number', label: 'Planta relacionada' },
      { key: 'ip', type: 'string', label: 'direccion IP' },
    ];
    this.checkBoxCardTitle = true;
    this.columns = [
      { headerName: '#', field: 'id', sortable: true, filter: true },
      { headerName: 'Nombre', field: 'name', sortable: true, filter: true },
      { headerName: 'Planta relacionada', field: 'plant_id', sortable: true, filter: true },
      { headerName: 'Dirección IP', field: 'ip', sortable: true, filter: true },
      { headerName: 'Acciones', field: 'id', cellRenderer: 'actionsCellComponent', cellRendererParams: {'paramsActions': {resource: this.resource, actionsBtn: this.actionsBtn}} }
    ];
    this.viewAsTable = false;
   }

  ngOnInit() {
    this.getDevices();
  }


  public onSearch(input: string) {
    this.searchInput = input;
  }

  public changeView() {
    this.viewAsTable = this.viewAsTable ? false : true;
  }

  /**
   * getDevices
   */
  public getDevices() {
    let childsRoutes = [];
    this._devicesService.getDevices(this.resource)
        .subscribe( (resp) => {
          // console.log(resp);
          const addChilds = [...resp.object.object];
          addChilds.forEach( (dev) => {
            // console.log(custo);
            childsRoutes.push(
              {
                relatedTo: 'plants',
                id: dev.id,
                childResource: 'plantas'
              },
              {
                relatedTo: 'inverters',
                id: dev.id,
                childResource: 'inversores'
              }
            );
            dev.hasChild = [...childsRoutes];
            childsRoutes = [];
          })
          ;
          this.dataSet = [...addChilds];
          this.searchFields = this.dataSet.length > 0 ? Object.keys(Object.keys(this.dataSet[0]).filter(key => (this.dataSet[0][key])).reduce((res, key) => (res[key] = this.dataSet[0][key], res), {})).filter(field => field !== 'hasChild'): [];
          // console.log(this.dataSet);

        });
  }


    /**
  * defineFormCreate grabs the definitor from API and pass to the component
  * to modals component
  */
  public defineFormCreate( typeOperation: string, callback: any ) {
    this._dashboardService.getFormBuilder(this.resource, typeOperation)
        .subscribe( (resp: any) => {
           console.log(resp);
           this.formsDynamic = resp.object.object.filter( (element: any) => {
             // console.log(element.required);
               // despues del fix de os cambiar la condicion por solo element.required
             return element.required === false;
           });
           this.formsDynamic = [...resp.object.object];
           console.log(this.formsDynamic);
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
       const OpendialogRef = dialogRef.open(ModalsComponent, {
         data: {
           name,
           resource: this.resource,
           typeOperation,
           datasToBuild: resp || null
          }
         });
       OpendialogRef.afterClosed().subscribe( (data: any) => {
         console.log('The dialog was closed');
         setTimeout(() => this.getDevices(), 2000);
       });
     });
  }

}
