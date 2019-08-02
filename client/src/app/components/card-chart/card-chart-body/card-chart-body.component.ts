import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-chart-body',
  templateUrl: './card-chart-body.component.html',
  styleUrls: ['./card-chart-body.component.scss']
})
export class CardChartBodyComponent implements OnInit {

  @Input() datasCharts: any;
  @Input() keysCardBody: any;
  @Input() label: any;
  public datas: any;
  public typeDisplay: string;

  constructor() {

    this.typeDisplay='card'
   }

  ngOnInit() {
    this.datas = this.datasCharts;
  }

}
