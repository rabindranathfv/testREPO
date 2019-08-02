import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { apiBase } from './apiBase';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './storage.service';

import { CookieService } from 'ngx-cookie-service';
import { Cookie } from './cookie';
// import { Cookie } from './cookie';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    ApiService,
    Cookie
  ]
})
export class ApiModule {
  static forRoot( base ): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: apiBase,
          useValue: base
        },
        {
          provide: StorageService,
          useValue: base
        },
        //  CookieService,
        //  Cookie,
      ],
    };
  }
}
