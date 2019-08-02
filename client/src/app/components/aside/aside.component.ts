import { Component, OnInit, Input, OnChanges,EventEmitter, Output } from '@angular/core';

// services
import { DashboardService } from '../../services/dashboard/dashboard.service';

// angular material implements
import { MatTabChangeEvent } from '@angular/material';

interface AsideInfo {
  id: number;
  typeData: string;
  formsDynamic?: any;
}

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnChanges {

  objDetail: AsideInfo;
  // objUpdate: AsideInfo;
  dataModel: any;
  tabIndex: number;
  hideAside: boolean;
  form: any;
  confirmButton:boolean=false;
 


  constructor( private _dashboardService: DashboardService,
    ) {
      this.hideAside = false;
     }

  ngOnInit() {
    this.updateAsideData();
    this.listenCustomerChanges();
  }

  ngOnChanges() {
    this.updateAsideData();

  }

  /**
   * listenCustomerChanges with a behavior Subject implementation
   */
  public listenCustomerChanges() {
    // this._dashboardService.currentSubject.subscribe( (dataForm) => {
    //   // console.log(dataForm);
    //   this.form = dataForm;
    //   // console.log(this.form);
    // });
    console.log("listenCustomerChanges");
  
  }


  /**
   * updateAsideData using a behavior subject implementation for share data into componentes with Aside section
   */
  public updateAsideData() {
    // get data from card-content component
    this._dashboardService.dataShare
        .subscribe( (objD) => {
          this.objDetail = {...objD};
        });
  }


  public update(typeData:any,id:any) {
    this.confirmChanges(typeData, id,this.form);
  }


  public confirmChanges( typeData:any, id: any,datas:any ) {

    // pass data into this method can make de update in data 

    // this._dashboardService.updateCustomer( 'usuarios', datas , id)
    //     .subscribe( () => {
    //       console.log(`se edito exitosamente el cliente de id ${id}`);
    //     });

    //   }

      console.log("confirmChanges");


  }
  
  
  // send the tabIndex for handle events for table in aside-table component and trigger the request
  public tabChanged( tabChangeEvent: MatTabChangeEvent ) {
    
    this.tabIndex = tabChangeEvent.index;
    this.tabIndex===1? this.confirmButton=true:this.confirmButton=false;
   
  }
}
