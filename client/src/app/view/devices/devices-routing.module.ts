import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { PlantsPerDevicesComponent } from './plants-per-devices/plants-per-devices.component';
import { InvertersPerDevicesComponent } from './inverters-per-devices/inverters-per-devices.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent
  },
  {
    path: ':id/plantas',
    component: PlantsPerDevicesComponent
  },
  {
    path: ':id/inversores',
    component: InvertersPerDevicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
