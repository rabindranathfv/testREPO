import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ModalsComponent } from 'src/app/components/modals/modals.component';
import { PanelsService } from 'src/app/services/panels/panels.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss']
})
export class PanelsComponent implements OnInit {

  public searchInput: string;
  public dataSet: any; // data to show in the view
  public id: number;
  public resource: string; // resource for API
  public objDetail = { }; // for get data of behaviorSubject
  public objUpdate = { }; // data for update to send to Aside
  public typeOperation: string;
  public formsDynamic: any; // Save data of definitors from API and with data to for show and update operations
  public data: {};
  public associateArray: object[];
  public url: string;
  public datasCardBody: any; // Datas we want to display in 'card-body' component
  public checkBoxCardTitle: boolean;
  public searchFields = []; // Fields for the filter searcher pipe.
  public viewAsTable: boolean; // Boolean for option visualization
  public columns: any; // Table column

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
    }
  ];

  constructor( private _panelsServices: PanelsService,
               private _dashboardService: DashboardService,
               public activatedRoute: ActivatedRoute,
               public router: Router,
               private dialog: MatDialog
  ) {
    this.url = this.activatedRoute.snapshot.data.url;
    this.resource = this.activatedRoute.snapshot.data.resource;
    this.checkBoxCardTitle = true;
    this.viewAsTable = false;
  }

  ngOnInit() {
    this.getDataStructure();
    this.getPanels();
  }

  public onSearch(input: string) {
    this.searchInput = input;
  }

  public changeView() {
    this.viewAsTable = this.viewAsTable ? false : true;
  }

  /**
   * getPanels
   */
  public getPanels() {
    this._panelsServices.getPanels(this.resource)
        .subscribe( (resp: any) => {
          this.dataSet = [...resp.object.object];
          this.searchFields = this.dataSet.length > 0 ? Object.keys(Object.keys(this.dataSet[0]).filter(key => (this.dataSet[0][key])).reduce((res, key) => (res[key] = this.dataSet[0][key], res), {})).filter(field => field !== 'hasChild') : [];
    });
  }

  public getDataStructure() {
    this._dashboardService.getCardInfo(this.resource)
    .subscribe( (resp: any) => {
      this.datasCardBody = [...resp.object.object];
    });
    this._dashboardService.getTableInfo(this.resource)
        .subscribe( (resp: any) => {
          this.columns = [
            ...resp.object.object,
            { headerName: 'Acciones', field: 'id', cellRenderer: 'actionsCellComponent', cellRendererParams: {'paramsActions': {resource: this.resource, actionsBtn: this.actionsBtn} } }
          ];
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
         name: 'Panels',
         resource: this.resource,
         typeOperation,
         datasToBuild: resp || null
        }
       });
     OpendialogRef.afterClosed().subscribe( (data: any) => {
       console.log('The dialog was closed');
       setTimeout(() => this.getPanels(), 2000);
     });
   });
 }

}
