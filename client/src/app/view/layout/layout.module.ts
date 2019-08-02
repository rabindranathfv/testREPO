import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent} from '../header/header.component';
import { MaterialModule} from '../../components/material/material.module' ;
import { FlexLayoutModule } from '@angular/flex-layout';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
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
    LayoutComponent,
    HeaderComponent,

  ],

  exports: [
    MaterialModule,
    LayoutComponent,
    HeaderComponent,
  ]
})
export class LayoutModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
