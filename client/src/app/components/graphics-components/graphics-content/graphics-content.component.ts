import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
@Component({
  selector: 'app-graphics-content',
  templateUrl: './graphics-content.component.html',
  styleUrls: ['./graphics-content.component.scss']
})
export class GraphicsContentComponent implements OnInit, OnChanges {

  @Input() chartjsDatas: any;
  public noDatasMessage: string;
  public displayType: string;
  public datasChart: boolean; // To check if at least one chart has datas
  public arrayTypeCharts: any;
  public arrayImgPath: any;
  public ressourceImg: string;
  public emptyLabel: string;
  constructor(
      public _dashboardService: DashboardService
  ) {

    this.noDatasMessage = 'No hay datos dentro del rango';
    this.datasChart = false;
    this.arrayTypeCharts = [];
    this.arrayImgPath = [];
    this.ressourceImg = '../../../../assets/img/empty-charts/';
    this.emptyLabel = 'Sin Datos';
  }

  ngOnInit() { 
  }

  ngOnChanges(changes: SimpleChanges) {
    // Test to check if chartjsDatas are empty or not
    // ( handle the futur case if  chartjsDatas input  have charts with datas and other without)
    this.arrayTypeCharts = [];
    this.arrayImgPath = [];
    const currentDatasValue = changes.chartjsDatas.currentValue;


    if (currentDatasValue && currentDatasValue.length > 0) {
      this.displayType = 'someDatas';

      currentDatasValue.map((chart) => {
          if ( chart.data.datasets[0].data.length > 0) {
            this.arrayTypeCharts.push(true);
            this.arrayImgPath.push('');
          } else {
            this.arrayTypeCharts.push(false);
            let imgName = '';
            switch (chart.segmentation) {

              case 'temperatures':
              imgName = 'TEMPERATURA.svg';
              break;

              case 'clusters':
              imgName = 'CLUSTER.svg';
              break;

              case 'gses':
              imgName = 'GSE.svg';
              break;

              case 'frequency':
              imgName = 'FRECUENCIA.svg';
              break;

              case 'humidity':
              imgName = 'HUMEDAD.svg';
              break;

              case 'wind':
              imgName = 'VIENTO.svg';
              break;

              case 'communes':
              imgName = 'COMUNAS.svg';
              break;

              case 'monetary':
              imgName = 'VALORMONETARIO.svg';
              break;

              case 'recency':
              imgName = 'RECENCIA.svg';
              break;

              default:
               imgName = '';
              break;
          }
          this.arrayImgPath.push(this.ressourceImg + imgName);
        }

      });
    } else {
      this.displayType = 'emptyDatas';
    }

  }
}
