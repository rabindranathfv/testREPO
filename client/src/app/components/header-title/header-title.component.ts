import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-header-title',
  templateUrl: './header-title.component.html',
  styleUrls: ['./header-title.component.scss']
})
export class HeaderTitleComponent implements OnInit {

  public title: string;

  constructor(private activatedRoute: ActivatedRoute) {
      this.title = this.activatedRoute.snapshot.data.title;
  }

  ngOnInit() { }
}
