import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss']
})
export class CardTitleComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;
  @Input() checkBox: boolean;
  @Input() hasChild?: any;
  public noDataMessage: string;

  constructor( private router: Router) {
  }

  ngOnInit() {
    this.id = this.id.slice(-3);
  }
}
