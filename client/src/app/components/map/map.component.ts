import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';
// import { Globals } from '../../../globals';

// import * as geo from '../../../../assets/geo/geo.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent
implements OnInit, OnChanges {
  @Input() mapData;
  @Input() draggable = true;
  // show in label
  @Input() label;
  center;
  zoom: number;
  path = [];
  markers = [];
  // markerIcons = Globals.markerIcons;
  // Estilo
  /* Variables para área demarcada */
  strokeWeight = 2;
  fillColor = '#700076';
  fillOpacity = '.1';
  //
  @Output() clickMarker = new EventEmitter<any>();
  @Output() clickMap = new EventEmitter<any>();
  
  // bucles for sobre objetos JSON
  objectKeys = Object.keys;
/*   public mapStyles = [
    {
    'featureType': 'poi',
    'elementType': 'labels',
    'stylers': [
      {
        'visibility': 'off'
      }
      ]
    }
  ]; */
  mapStyles = [
    {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [{color: '#c9b2a6'}]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'geometry.stroke',
      stylers: [{color: '#dcd2be'}]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [{color: '#ae9e90'}]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#93817c'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [{color: '#a5b076'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#447530'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#f5f1e6'}]
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [{color: '#fdfcf8'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#f8c967'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#e9bc62'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [{color: '#e98d58'}]
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry.stroke',
      stylers: [{color: '#db8555'}]
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [{color: '#806b63'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.fill',
      stylers: [{color: '#8f7d77'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#ebe3cd'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [{color: '#b9d3c2'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#92998d'}]
    }
  ];
  constructor( ) { }
  public onMap( event ) {
    this.clickMap.emit(event);
  }
  public onMarker( dot ) {
    this.clickMarker.emit( dot );
  }
  ngOnInit() {
  }
  ngOnChanges( changes ) {
    if ( changes.mapData && this.mapData ) {
      this.zoom = this.mapData.zoom;
      this.preparePath(this.mapData.area);
      this.prepareMarkers(this.mapData.markers, (markers) => {
        this.markers = markers;
      } );
      this.center = this.mapData.center;
    }
  }
  prepareMarkers( markers: any[], callback ) {

    if (markers) {
      markers.forEach( (dot, index) => {
        /* if ( dot.alert ) {
          dot.icon = this.markerIcons.alert;
        } else
        if ( ! dot.alert ) {
          dot.icon = this.markerIcons.normal;
        } */
        //

        if ( index === markers.length - 1 ) {
          callback(markers);
        }
      });
      // markers = JSON.parse( JSON.stringify(markers) );
    } else {
      return [];
    }

  }
  preparePath( area ) {
    if (area) {
      delete this.path;
      this.path = [];
      if (area[0].area) {
        area.forEach( path => {

          const innerPath = [];
          path.area.forEach( dots => {
            if (dots[0]) {
              dots['longitude'] = dots[0];
              dots['latitude'] = dots[1];
            }
            innerPath.push({
              lng: dots.longitude,
              lat: dots.latitude,
              // color: 'red'
            });

          });
          this.path.push({
            path: innerPath,
            color: path.color
          });
        });

      } else {
        area.forEach( dot => {
          if (dot[0]) {
            dot['longitude'] = dot[0];
            dot['latitude'] = dot[1];
          }
          this.path.push({
            lng: dot.longitude,
            lat: dot.latitude
          });
        });
      }
    }
  }

}
