import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit, OnChanges {

  @Input() datasChartsInput: any;
  @Input() typeDisplay: string;
  public datasCharts: any;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scaleStartValue: 0,
  };

  public barChartLegend = true;

  constructor() {


  }

  ngOnInit() {

  }

  ngOnChanges() {

    if (this.datasChartsInput) {

      this.datasCharts = this.datasChartsInput;
    }
  }


  // events
  public chartClicked(event: any): void {
    console.log(event);
  }

  public chartHovered(event: any): void {
    console.log(event);
  }


}
