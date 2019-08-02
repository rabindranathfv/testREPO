import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InversorsComponent } from './inversors/inversors.component';

const routes: Routes = [
  {
    path: '',
    component: InversorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InversorsRoutingModule { }
