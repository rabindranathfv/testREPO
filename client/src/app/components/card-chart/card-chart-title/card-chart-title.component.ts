import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card-chart-title',
  templateUrl: './card-chart-title.component.html',
  styleUrls: ['./card-chart-title.component.scss']
})
export class CardChartTitleComponent implements OnInit {

  @Input() title: string;

  public noDataMessage:string;

  constructor() {

  }

  ngOnInit() {
  }

}
