import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalsComponent } from '../../../components/modals/modals.component';

// services
import { DashboardService } from '../../../services/dashboard/dashboard.service';
import { CustomersComponent } from 'src/app/view/customers/customers/customers.component';
import { DevicesComponent } from 'src/app/view/devices/devices/devices.component';
import { PlantsComponent } from 'src/app/view/plants/plants/plants.component';
import { InversorsComponent } from 'src/app/view/inversors/inversors/inversors.component';
import { PanelsComponent } from 'src/app/view/panels/panels/panels.component';
import { PanelsInvertersComponent } from 'src/app/view/panels-inverters/panels-inverters/panels-inverters.component';
import { PlantsInvertersComponent } from 'src/app/view/plants-inverters/plants-inverters/plants-inverters.component';
import { AddResourceModalComponent } from '../../add-resource-modal/add-resource-modal/add-resource-modal.component';
import { UsersComponent } from 'src/app/view/users/users/users.component';


@Component({
  selector: 'app-card-actions',
  templateUrl: './card-actions.component.html',
  styleUrls: ['./card-actions.component.scss']
})
export class CardActionsComponent implements OnInit {

  @Input() id: any;
  @Input() resource: string;
  @Input() dataObject: any;
  @Input() associateArray?: string[]; // Array to define relationship between different views (ex : ['users','devices'] in 'plants')
  @Input() actionsBtn: any;
  public type: string;
  formsDynamic: any; // Save data of definitors from API and with data to for show and update operations
  public data = {};

  constructor( private dialog: MatDialog,
               private _dashboardService: DashboardService,
               private _customers: CustomersComponent,
               private _users: UsersComponent,
               private _plants: PlantsComponent,
               private _devices: DevicesComponent,
               private _inversors: InversorsComponent,
               private _panels: PanelsComponent,
               private _panelsInverters: PanelsInvertersComponent,
               private _plantsInverteres: PlantsInvertersComponent
  ) {
    }

  ngOnInit() {
    // console.log(this.dataObject);
  }

      /**
   * openModalsByOperation pass and id of instance, name, and typeOperation (integer since 1 at 4)
   */
  public openModalsByOperation( id: number, name: string, typeOperation?: string) {
    if(typeOperation === 'create_related'){
      this.showAddResources();
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
            this._customers.getCustomers();
            break;
          case 'users':
            this._users.getUsers();
            break;
          case 'hubs':
            this._devices.getDevices();
            break;
          case 'plants':
            this._plants.getPlants();
            break;
          case 'inverters':
            this._inversors.getInversors();
            break;
          case 'panels':
            this._panels.getPanels();
            break;
          case 'solar_panel_inverters':
            this._panelsInverters.getPanelsInverters();
            break;
          case 'plants_inverters':
            this._plantsInverteres.getPlantsInverters();
            break;
        }
        this._dashboardService.updateChangesView(data);
      });
    });
  }


  public defineFormsTypeByOperation( id?: number, name?: string , typeOperation?: string, callback?: any): any {
    this._dashboardService.getDatas(`${this.resource}/${this.id}`)
            .subscribe( (resp: any) => {
            // console.log('ejecutando getData Method');
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
              this.associateArray.forEach((ele, index) => {
                this._dashboardService.getDatas(ele['resource'])
                .subscribe((resp: any) => {
                  builder[index]['datas'] = resp.object.object;
                });
              });
              callback(builder);
            }
        });

    // this.formsDynamic = mockFieldsConfig
    // callback(this.formsDynamic);
  }

  public showAddResources(){
    const dialogRef = this.dialog;
    const OpendialogRef = dialogRef.open(AddResourceModalComponent, {
      width: '600px',
      data: {
        title: 'Related resources creation',
        resource: this.resource,
        related: [{resource: 'plants', title: 'Plantas', icon: 'industry', uri: `info/plants/${this.id}`},{resource: 'users', title: 'Usuarios', icon: 'user', uri: `info/users/${this.id}`}],
        id_resource: this.id
      }
    });
    OpendialogRef.afterClosed().subscribe( (data: any) => {});
  }

}
