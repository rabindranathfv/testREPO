import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

// services
import { StorageService } from './services/api/storage.service';
import { DashboardService } from './services/dashboard/dashboard.service';
import { CustomersService } from './services/customers/customers.service';
import { PlantsService } from './services/plants/plants.service';
import { InversorsService } from './services/inversors/inversors.service';
import { DevicesService } from './services/devices/devices.service';
import { PanelsService } from './services/panels/panels.service';
import { PanelsInvertersService } from './services/panels-inverters/panels-inverters.service';
import { PlantsInvertersService } from './services/plants-inverters/plants-inverters.service';
import { UsersService } from './services/users/users.service';

// interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';

// modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from './services/api/api.module';
import { LayoutModule } from './view/layout/layout.module';
import { LoginModule } from './view/login/login.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AdminGuard } from './guard/admin.guard';
import { AuthService } from './guard/auth.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginGuard, LogedGuard } from './guard/login.guard';
import { GestureConfig, MAT_DATE_LOCALE} from '@angular/material';
import { DirectivesModule } from './directives/directives.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { NotifBarMaterialModule } from 'src/app/components/notif-bar-material/notif-bar-material.module';
import { CustomersModule } from './view/customers/customers.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return environment.token;
}
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    DirectivesModule,
    CustomersModule,
    NotifBarMaterialModule,
    // GoogleChartsModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    }),
    ApiModule.forRoot( `${environment.url}`),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // tokenGetter: environment.token,
        // ESTO GENERA ERRORES AL USAR BUILD --PROD --AOT
          // Generar token en tiempo de compilación
          // clave pública desde node
        headerName: 'uath',
        whitelistedDomains: [environment.url],
        blacklistedRoutes: [`${environment.url}/auth/login`]
      }
    }),
    LoginModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    DashboardService,
    CustomersService,
    DevicesService,
    PlantsService,
    InversorsService,
    PanelsService,
    PanelsInvertersService,
    PlantsInvertersService,
    UsersService,
    AdminGuard,
    LoginGuard,
    LogedGuard,
    AuthService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: GestureConfig
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'} // => To get dates formats dd/mm/yyyy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
