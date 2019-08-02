import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import {navHeader, navContent, navFooter, navAccountMenu, languages} from 'src/app/_nav';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.
})

export class HeaderComponent implements OnInit {


  @Input() sidebarVisibility: boolean;
  @Input() currentUrl: string;
  public NavContent: any;
  public NavAccountMenu: any;
  public NavHeader: any;
  public Languages: any;

  constructor(
    private translate: TranslateService,
  ) {
    this.NavContent = navContent;
    this.NavAccountMenu = navAccountMenu;
    this.NavHeader = navHeader;
    this.Languages = languages;
  }

  ngOnInit() {

  }

  public changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

}
