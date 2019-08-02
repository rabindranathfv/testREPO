import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// interface
import { FieldConfig } from '../../../interfaces/forms/field.interface';

// component
import { DynamicFormComponent } from '../../dynamic-form/dynamic-form.component';

// services
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { PlantsService } from 'src/app/services/plants/plants.service';


@Component({
  selector: 'app-modals-body',
  templateUrl: './modals-body.component.html',
  styleUrls: ['./modals-body.component.scss']
})
export class ModalsBodyComponent implements OnInit {

  selectedResource: string;
  resourcesList: any;
  idsList: any;
  @Input() resource: string;
  @Input() typeOperation: string;
  @Input() dataModel: any;
  @ViewChild('dynForm') form: DynamicFormComponent;
  regConfig: FieldConfig[] = []; // Form fields datas
  associateDatas;
  @Input() globalForm;
  formAssociate: FormGroup;
  resources_assoc = {
    'customers': 'customer_id',
    'plants': 'plant_id',
    'inverters': 'inverter_id',
    'solar_panels': 'solar_panel_id',
  };
  // formDissociate: FormGroup;
  // dataDetails: {};
  public  datasSelect: any; // ngModel for Select (association / dissociation)
  public currentDatas: any;
  constructor( private _dashboardService: DashboardService,
               private _customersService: CustomersService,
               private _devicesService: DevicesService,
               private _plantsService: PlantsService,
               private fb: FormBuilder
  ) {

   }
  ngOnInit() {
    //console.log(this.resource, this.typeOperation, this.dataModel);
    // console.log('*** GLOBAL FORM *****', this.globalForm);
    this.regConfig = (this.dataModel.datasToBuild) ? [...this.dataModel.datasToBuild] : null;

      // if ( this.resource === 'users' ) {
    this._dashboardService.currentSubjectMock1.subscribe( (resp: any) => {
      });

    if (this.typeOperation === 'association') {
      this.dataModel.datasToBuild.sort((a, b) => b - a); // funcion para ordenar el array, remover en versión final
      this.resourcesList = this.dataModel.datasToBuild.shift().options;
    }
   }

  public clearAssociation(resourceSelect) {
    this.datasSelect[resourceSelect] = [];
  }

  // /**
  //  * createDissociateForm
  //  */
  // public createDissociateForm() {
  //   this.formDissociate = this.fb.group({
  //     id: ''
  //   });
  // }

  // submit(value: any) {
  //   console.log(value);
  // }

  // /**
  //  * getPlants
  //  */
  // public getPlants() {
  //   this._plantsService.getPlants(this.resource)
  //       .subscribe((plants: any) => {
  //           console.log(plants);
  //           // this.dataDetails = {...plants.object.object};
  //       });
  // }

  // /**
  //  * getUsers
  //  */
  // public getUsers() {
  //   console.log(this.resource);
  //   this._customersService.getCustomers(this.resource)
  //       .subscribe( (users) => {
  //         console.log(users);
  //       });
  // }


}
