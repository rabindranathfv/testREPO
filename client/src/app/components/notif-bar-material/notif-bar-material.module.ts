import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifBarMaterialComponent } from './notif-bar-material/notif-bar-material.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import { MaterialModule } from '../material/material.module';

import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      },
        isolate: false
    })
  ],
  declarations: [NotifBarMaterialComponent],
  entryComponents: [ NotifBarMaterialComponent],
  providers: [
    { provide: MAT_SNACK_BAR_DATA, useValue: {} }
  ],
  exports: [ NotifBarMaterialComponent, MaterialModule]
})
export class NotifBarMaterialModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
