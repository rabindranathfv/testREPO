import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlantsInvertersComponent } from './plants-inverters/plants-inverters.component';

const routes: Routes = [
  {
    path: '',
    component: PlantsInvertersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantsInvertersRoutingModule { }
