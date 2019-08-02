import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { PlantsPerCustomerComponent } from './plants-per-customer/plants-per-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: ':id/plantas',
    component: PlantsPerCustomerComponent,
  },
  {
    path: ':id/usuarios',
    component: PlantsPerCustomerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
