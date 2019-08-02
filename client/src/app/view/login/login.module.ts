import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from 'src/app/services/api/api.module';
import {MaterialModule} from 'src/app/components/material/material.module';
import { NotifBarMaterialModule } from 'src/app/components/notif-bar-material/notif-bar-material.module';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ApiModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NotifBarMaterialModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      },
        isolate: false
    })
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
