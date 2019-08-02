import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

// services
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { CustomersService } from 'src/app/services/customers/customers.service';
import { PlantsService } from 'src/app/services/plants/plants.service';
import { DevicesService } from 'src/app/services/devices/devices.service';
import { InversorsService } from 'src/app/services/inversors/inversors.service';

// componentes
import { CustomersComponent } from 'src/app/view/customers/customers/customers.component';
import { PlantsComponent } from 'src/app/view/plants/plants/plants.component';
import { DevicesComponent } from 'src/app/view/devices/devices/devices.component';
import { InversorsComponent } from 'src/app/view/inversors/inversors/inversors.component';
import { PanelsComponent } from 'src/app/view/panels/panels/panels.component';
import { ModalsComponent } from 'src/app/components/modals/modals.component';
import { PanelsInvertersComponent } from 'src/app/view/panels-inverters/panels-inverters/panels-inverters.component';
import { PlantsInvertersComponent } from 'src/app/view/plants-inverters/plants-inverters/plants-inverters.component';
import { AddResourceModalComponent } from 'src/app/components/add-resource-modal/add-resource-modal/add-resource-modal.component';

@Component({
  selector: 'app-actions-cell',
  templateUrl: './actions-cell.component.html',
  styleUrls: ['./actions-cell.component.scss']
})
export class ActionsCellComponent implements OnInit {

  params: any;
  public resource: string;
  public type: string;
  public buttonsData: any;
  formsDynamic: any; // Save data of definitors from API and with data to for show and update operations
  public data = {};
  associateArray?: string[];

  constructor( private dialog: MatDialog,
               private _dashboardService: DashboardService,
               private _custpomersService: CustomersService,
               private _plantsService: PlantsService,
               private _devicesService: DevicesService,
               private _inversorsServices: InversorsService,
               private customers: CustomersComponent,
               private plants: PlantsComponent,
               private devices: DevicesComponent,
               private inversors: InversorsComponent,
               private panels: PanelsComponent,
               private panelsInverters: PanelsInvertersComponent,
               private plantsInvertersComponent: PlantsInvertersComponent
  ) {
    }

  ngOnInit() {
  }

  agInit(params: any): void {
    this.params = params;
    this.resource = this.params.paramsActions.resource;
    this.buttonsData = this.params.paramsActions.actionsBtn;
    this.associateArray = this.params.paramsActions.associateArray;
  }

  /**
   * openModalsByOperation pass and id of instance, name, and typeOperation (integer since 1 at 4)
   */
  public openModalsByOperation( id: number, name: string, typeOperation?: string) {
    if(typeOperation === 'create_related'){
      this.showAddResources(id);
      return;
    }
    const dialogRef = this.dialog;
    this.defineFormsTypeByOperation(id, this.resource, typeOperation, resp => {
      const OpendialogRef = dialogRef.open(ModalsComponent, {
        data: {
          id,
          name,
          resource: this.resource,
          typeOperation,
          datasToBuild: resp || null
          }
        });

      OpendialogRef.afterClosed().subscribe( (data: any) => {
        console.log('The dialog was closed');
        switch(this.resource){
          case 'customers':
            this.customers.getCustomers();
            break;
          case 'hubs':
            this.devices.getDevices();
            break;
          case 'plants':
            this.plants.getPlants();
            break;
          case 'inverters':
            this.inversors.getInversors();
            break;
          case 'panels':
            this.panels.getPanels();
            break;
          case 'solar_panel_inverters':
            this.panelsInverters.getPanelsInverters();
            break;
          case 'plants_inverters':
            this.plantsInvertersComponent.getPlantsInverters();
            break;
        }
        this._dashboardService.updateChangesView(data);
      });
    });
  }


  public defineFormsTypeByOperation( id?: number, name?: string , typeOperation?: string, callback?: any): any {
    this._dashboardService.getDatas(`${this.resource}/${id}`)
            .subscribe( (resp: any) => {
            console.log(resp);
            resp.object.object.forEach( (data: any) => {
              // this.data = (data.id === id) ? data : null;
            });
            this.data = resp.object.object[0];
            if (typeOperation !== 'associate' && typeOperation !== 'dissociate') {
                this._dashboardService.getFormBuilder(this.resource, typeOperation)
                    .subscribe( (respForm: any) => {
                      this.formsDynamic = [...respForm.object.object];
                      this.formsDynamic.forEach( dataEle => {
                        if (this.data && this.data.hasOwnProperty(dataEle.name)) {
                          dataEle.value = this.data[dataEle.name];
                        }
                      });
                      callback(this.formsDynamic);
                    });
              } else {
              let builder = this.associateArray;
              builder.forEach((ele, index) => {
                this._dashboardService.getDatas(ele['resource'])
                .subscribe((resp: any) => {
                  builder[index]['datas'] = resp.object.object;
                });
              });
              callback(builder);
            }
        });
  }

  public showAddResources(id: number){
    const dialogRef = this.dialog;
    const OpendialogRef = dialogRef.open(AddResourceModalComponent, {
      width: '600px',
      data: {
        title: 'Añadir recursos',
        related: [{resource: 'plants', title: 'Planta', icon: 'industry'}, {resource: 'users', title: 'Usuario', icon: 'user'}],
        resource: this.resource,
        id_resource: id
      }
    });
    OpendialogRef.afterClosed().subscribe( (data: any) => {});
  }

}
