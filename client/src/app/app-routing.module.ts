import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { LoginComponent } from './view/login/login/login.component';
import { LoginGuard, LogedGuard } from './guard/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [LogedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    /* canActivate: [LogedGuard] */
  },
  {
    path: 'clientes',
    loadChildren: 'src/app/view/customers/customers.module#CustomersModule',
    data: { title: 'Clientes', resource: 'customers', type: 'customers', url: 'clientes' },
    /* canActivate: [LoginGuard] */
  },
  {
    path: 'usuarios',
    loadChildren: 'src/app/view/users/users.module#UsersModule',
    data: { title: 'Usuarios', resource: 'users', type: 'users', url: 'usuarios' },
    /* canActivate: [LoginGuard] */
  },
  {
    path: 'plantas',
    loadChildren: 'src/app/view/plants/plants.module#PlantsModule',
    data: { title: 'Plantas', resource: 'plants', type: 'plants', url: 'plantas' },
    /* canActivate: [LoginGuard] */
  },
/*   {
    path: 'plantas-inversores',
    loadChildren: 'src/app/view/plants-inverters/plants-inverters.module#PlantsInvertersModule',
    data: { title: 'Plantas - Inversores', resource: 'plant_inverters', type: 'plant_inverters' },
  }, */
/*   {
    path: 'dispositivos',
    loadChildren: 'src/app/view/devices/devices.module#DevicesModule',
    data: { title: 'Dispositivos', resource: 'hubs', type: 'hubs' },
    canActivate: [LoginGuard]
  }, */
  {
    path: 'inversores',
    loadChildren: 'src/app/view/inversors/inversors.module#InversorsModule',
    data: { title: 'Inversores', resource: 'inverters', type: 'inverters', url: 'inversores' },
    /* canActivate: [LoginGuard] */
  },
  {
    path: 'paneles',
    loadChildren: 'src/app/view/panels/panels.module#PanelsModule',
    data: { title: 'Paneles solares', resource: 'solar_panels', type: 'solar_panels', url: 'paneles' },
    /* canActivate: [LoginGuard] */
  },
  {
    path: 'paneles-inversores',
    loadChildren: 'src/app/view/panels-inverters/panels-inverters.module#PanelsInvertersModule',
    data: { title: 'Paneles - Inversores', resource: 'solar_panel_inverters', type: 'solar_panel_inverters' },
  },
  {
    path: 'registro-asistido',
    loadChildren: 'src/app/view/wizard/wizard.module#WizardModule',
    data: { title: 'Registro Asistido', resource: 'wizard', type: 'wizard', url: 'Registro asistido' },
    /* canActivate: [LoginGuard] */
  },
  {
    path: 'info',
    loadChildren: 'src/app/view/info/info.module#InfoModule',
    data: { title: 'Info', resource: 'info', type: 'info', url: 'info' },
    /* canActivate: [LoginGuard] */
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
