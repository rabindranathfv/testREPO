import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
// import { Globals } from '../../../globals';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBaL_Ao3eJosRKA9D3acX_iBO1tfDGK1B8'
    }),
    AgmSnazzyInfoWindowModule
  ],
  declarations: [MapComponent],
  exports: [MapComponent]
})
export class MapModule { }
