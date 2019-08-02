import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsComponent } from './plants/plants.component';
import { CustomersPerPlantsComponent } from './customers-per-plants/customers-per-plants.component';
import { DevicesPerPlantsComponent } from './devices-per-plants/devices-per-plants.component';

const routes: Routes = [
  {
    path: '',
    component: PlantsComponent
  },
  {
    path: ':id/clientes',
    component: CustomersPerPlantsComponent
  },
  {
    path: ':id/dispositivos',
    component: DevicesPerPlantsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantsRoutingModule { }
