import { Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { chartDatas, dynamicFormDatas, createDefinator } from 'src/app/_mock-datas';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { ModalsComponent } from 'src/app/components/modals/modals.component';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  // This variable is usualy used to pass as a parameter to dashboardService (for http requests). It can be set in app-routing.module.ts.
  public resource: string;

  // Chart Js
  public chartjsDatas: any;

  // Dynamic forms
  public DynamicFormDatas: any;
  public CreateDefinator: any;
  public data: any;
  public formsDynamic: any; // Save data of definitors from API and with data to for show and update operations

  // Cards
  public datasCards: any;
  public datasCardBody: any; // Datas we want to display in 'card-body' component

  // Charts Cards
  public typeDisplay: string;

  //  Filters
  public filtersArray: any;
  public dateFilter: boolean;
  public filtersFieldlabel: string;
  public fontSizeValue: number;
  public datasForDemo: string;

  // Ag grid
  public columnDefs: any;
  public rowData: any;
  public paginationPageSize: number;
  public colResizeDefault: string;
  public gridApi: any;
  public gridColumnApi: any;

  // Aside component
  public asideVisible: boolean;
  // Aside component
  public titleAside: string;
  public datasContent: any;

    // With directive
    //  With Renderer 2
  public asideDisplay: boolean;
  @ViewChild('mainContentRef') mainContentRef: ElementRef;
  @ViewChild('asideRef') asideRef: ElementRef;


  constructor( private _dashboardService: DashboardService,
               private activatedRoute: ActivatedRoute, // To se
               private dialog: MatDialog, // For Dynamic Forms,
               private renderer: Renderer2
    ) {

    // Chart Js
    this.chartjsDatas = chartDatas;

    // Dynamic forms
    this.DynamicFormDatas = dynamicFormDatas;
    this.CreateDefinator = createDefinator;
    this.data = {};

    // Cards
    this.datasCards = dynamicFormDatas;
    this.datasCardBody =
    [
      {key: 'name', label: 'Name'},
      {key: 'id_things', label: 'Id thing'},
      {key: 'token_things', label: 'Token things'},
      {key: 'created_at', label: 'Created at'},
      {key: 'thing_type', label: 'Thing type'}
    ];

    // Charts Cards
    this.typeDisplay = 'normal';

    // Filters
    this.filtersArray = [];
    this.dateFilter = true;
    this.filtersFieldlabel = 'Filtros';
    this.fontSizeValue = 9;


    // Ag-grid
    this.columnDefs = [
      {headerName: 'Make', field: 'make' },
      {headerName: 'Model', field: 'model' },
      {headerName: 'Price', field: 'price'},
      {headerName: 'Super Star', field: 'superStar'},
      {headerName: 'Super Star', field: 'superStar'},
      {headerName: 'Super Star', field: 'superStar'},
      {headerName: 'Super Star', field: 'superStar'},
  ];

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000, superStar: 'Snoop Dogg'},
      { make: 'Ford', model: 'Mondeo', price: 32000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
      { make: 'Porsche', model: 'Boxter', price: 72000, superStar: 'Snoop Dogg'},
  ];

    this.paginationPageSize = 5;
    this.colResizeDefault = 'shift';


  // Aside
    this.titleAside = 'Base aside demo';
    this.datasContent = this.DynamicFormDatas[0];

    this.asideVisible = true;
    this.asideDisplay = true;

  // Loader intersector
    this.datasForDemo = '';
}

  ngOnInit() {
    this.resource = this.activatedRoute.snapshot.data.resource;
  }


/////////////////////////////////////////////////////////////////////////////////////
/////////////////// Dynamic Form Exmple : Functions for real Case ///////////////////
/////////////////////////////////////////////////////////////////////////////////////

  public defineFormsTypeByOperation( id?: number, type?: string , typeOperation?: number, callback?: any): any {

    /* typeOperations
    1 delete
    2 edit
    3 show details
    4 AssociatePlantToCustomer
    */

      if ( typeOperation === 1 || typeOperation === 3) {
        this._dashboardService.getById( id, this.resource )
          .subscribe( (resp: any) => {
            console.log('ejecutando getById Method');
            console.log(resp);
            resp.object.forEach( (obj: any) => {
              this.data = (obj.id === id) ? obj : null;
            });
            this._dashboardService.getFormByType(this.resource, 'show')
                .subscribe( (respForm: any) => {
                  // console.log(respForm);
                  this.formsDynamic = [...respForm.object];
                  // console.log(this.formsDynamic);
                  this.formsDynamic.forEach( dataEle => {
                    if (this.data && this.data.hasOwnProperty(dataEle.name)) {
                      dataEle.value = this.data[dataEle.name];
                    }
                  });
                  callback(this.formsDynamic);
                });
          });
      } else if ( typeOperation === 2 ) {
        this._dashboardService.getById( id, this.resource )
            .subscribe( (resp: any) => {
            console.log(resp);
            resp.object.forEach( (obj: any) => {
              // console.log(obj);
              this.data = (obj.id === id) ? obj : null;
            });
            console.log(this.data);
            this._dashboardService.getFormByType(this.resource, 'create')
                .subscribe( (respForm: any) => {
                  // console.log(respForm);
                  this.formsDynamic = [...respForm.object];
                   // console.log(this.formsDynamic);
                  this.formsDynamic.forEach( dataEle => {
                    if (this.data && this.data.hasOwnProperty(dataEle.name)) {
                      dataEle.value = this.data[dataEle.name];
                    }
                  });
                  callback(this.formsDynamic);
                });
        });
      }
  }

  /**
   * openModalsByOperation pass and id of instance, name, and typeOperation (integer since 1 at 4)
   */
  public openModalsByOperation( id: number, name: string, typeOperation?: number ) {
    const dialogRef = this.dialog;
    console.log('Parameters:', `${id} ${this.resource} ${typeOperation} `);
    this.defineFormsTypeByOperation(id, this.resource, typeOperation, resp => {
      const OpendialogRef = dialogRef.open(ModalsComponent, {
        data: {
          resource: this.resource,
          id,
          name,
          typeOperation,
          formsDynamic: resp || null
        },
        panelClass: 'modalbox'
      });

      OpendialogRef.afterClosed().subscribe( (data: any) => {
        console.log(`The dialog for ${this.resource} is closed`);
        /******

        this.getDatas(); // Most of the time need to refresh datas after modifications, delete or add ...

        *********/
      });
    });
  }


    /**
   * openModals for Create instance
   */
  public openModals( definitor: string ): void {
    const dialogRef = this.dialog;
    this.defineFormCreate( definitor, resp => {
      const OpendialogRef = dialogRef.open(ModalsComponent, {
        data: {
          type: this.resource,
          showOperationModal: false,
          formsDynamic: this.formsDynamic  }
        });

      OpendialogRef.afterClosed().subscribe( (data: any) => {
        console.log(`The dialog for ${this.resource} is closed`);
        /******
        this.getDatas(); // Most of the time need to refresh datas after modifications, delete or add ...
        *********/
       });
    });
  }

/**
 * defineFormCreate grabs the definitor from API and pass to the component to modals component
 */
public defineFormCreate( definitor: string, callback: any ) {
  this._dashboardService.getFormByType(this.resource, definitor)
      .subscribe( (resp: any) => {
        console.log(resp);
        this.formsDynamic = [...resp.object];
        console.log(this.formsDynamic);
        /* this.formsDynamic = resp.object.object.filter( (element: any) => {
          console.log(element.required);
          // despues del fix de os cambiar la condicion por solo element.required
          return element.required === false;
        }); */
        callback(this.formsDynamic);
      });
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////// Dynamic Form Exmple : Functions for real Case ///////////////////
/////////////////////////////////////////////////////////////////////////////////////


  public defineFormsOpExemple( id?: number, type?: string , typeOperation?: number, callback?: any): any {

    /* typeOperations
    1 delete
    2 edit
    3 show details
    4 AssociatePlantToCustomer
    */

      if ( typeOperation === 1 || typeOperation === 3) {
        const resp = this.getByIdExemple( id, this.resource );
        console.log('ejecutando getById Method');
        console.log(resp);
        resp.forEach( (obj: any) => {
              this.data = (obj.id === id) ? obj : null;
            });
        console.log(this.data);
        const respForm = this.getFormByTypeExemple(this.resource, 'show');
                  // console.log(respForm);
        this.formsDynamic = [...respForm];
                  // console.log(this.formsDynamic);
        this.formsDynamic.forEach( dataEle => {
                    if (this.data && this.data.hasOwnProperty(dataEle.name)) {
                      dataEle.value = this.data[dataEle.name];
                    }
                  });
                  // console.log('justo antes de hacer el callback para formsDynamics');
        console.log('SHOW DATA');
        console.log(this.formsDynamic);
        callback(this.formsDynamic);

      } else if ( typeOperation === 2 ) {
        const resp = this.getByIdExemple( id, this.resource );
        resp.forEach( (obj: any) => {
              // console.log(obj);
              this.data = (obj.id === id) ? obj : null;
            });
        console.log(this.data);
        const respForm = this.getFormByTypeExemple(this.resource, 'create');
                  // console.log(respForm);
        this.formsDynamic = [...respForm];
        console.log(this.formsDynamic);
        this.formsDynamic.forEach( dataEle => {
                    if (this.data && this.data.hasOwnProperty(dataEle.name)) {
                      dataEle.value = this.data[dataEle.name];
                    }
                  });
                  // console.log('justo antes de hacer el callback para formsDynamics');
                  // console.log(this.formsDynamic);
        callback(this.formsDynamic);
      }
  }

  /**
   * openModalsByOperation pass and id of instance, name, and typeOperation (integer since 1 at 4)
   */
  public openModalsOpExemple( id: number, name: string, typeOperation?: number ) {
    const dialogRef = this.dialog;
    console.log('Parameters:', `${id} ${this.resource} ${typeOperation} `);
    this.defineFormsOpExemple(id, this.resource, typeOperation, resp => {
      const OpendialogRef = dialogRef.open(ModalsComponent, {
        data: {
          resource: this.resource,
          id,
          name,
          typeOperation,
          formsDynamic: resp || null
        },
        panelClass: 'modalbox'
      });

      OpendialogRef.afterClosed().subscribe( (data: any) => {
        console.log(`The dialog for ${this.resource} is closed`);
        /******

        this.getDatas(); // Most of the time need to refresh datas after modifications, delete or add ...

        *********/
      });
    });
  }



/////////////////////////////////////////////////////////////////////////////////////
///////////////// Mock function for Dynamic form exemple ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

  public getByIdExemple( id: number, resource: string ) {
    return this.DynamicFormDatas;
  }
/////////////////////////////////////////////////////////////////////////////////////
////////////// Mock function for Dynamic form exemple ///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

 public getFormByTypeExemple( resource: string , method: string ) {
  return this.CreateDefinator;
}


/////////////////////////////////////////////////////////////////////////////////////
////////////// Charts and Filters Functions//////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

  /**
   * getFilters
   */
  public getFilters() {
    alert('getFilter() allow you to build dynamicly the filters Check the code to see how it works! The console.log error are normal');

    this._dashboardService.getFilters()
        .subscribe( (resp: any) => {
          resp.object.filters.map((filter: any) => {
            const arrayFilter = filter;
            arrayFilter.disable = false;
            this.filtersArray.push( arrayFilter );
          });
        });
  }

/////////////////////////////////////////////////////////////////////////////////////
////////////// Ag Grid///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

  /**
   * These functions are used to render a full size ag-grid table
   */

  onGridReady(params) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();

  }

  sizeToFit() {
    this.gridApi.sizeColumnsToFit();
  }

/////////////////////////////////////////////////////////////////////////////////////
////////////// Demo Aside component//////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


  public  asideDemoTrigger() {
   this.asideVisible = !this.asideVisible;
   this.asideDisplay = !this.asideDisplay;
  }

  public handleAside() {

    if (this.asideDisplay) {
      this.renderer.removeClass(this.mainContentRef.nativeElement, 'main-content');
      this.renderer.addClass(this.mainContentRef.nativeElement, 'main-content-aside');
      this.renderer.removeClass(this.asideRef.nativeElement, 'aside-hidden');
      this.renderer.addClass(this.asideRef.nativeElement, 'aside-visible');
    } else {
      this.renderer.removeClass(this.mainContentRef.nativeElement, 'main-content-aside');
      this.renderer.addClass(this.mainContentRef.nativeElement, 'main-content');
      this.renderer.removeClass(this.asideRef.nativeElement, 'aside-visible');
      this.renderer.addClass(this.asideRef.nativeElement, 'aside-hidden');

    }
    this.asideVisible = !this.asideVisible;
    this.asideDisplay = !this.asideDisplay;


    }

}
