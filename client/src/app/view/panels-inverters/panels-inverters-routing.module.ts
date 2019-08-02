import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelsInvertersComponent } from './panels-inverters/panels-inverters.component';

const routes: Routes = [
  {
    path: '',
    component: PanelsInvertersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelsInvertersRoutingModule { }
