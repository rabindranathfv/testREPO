import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import {navHeader, navContent, navFooter} from 'src/app/_nav';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import {TranslateService} from '@ngx-translate/core';
import { languages } from '../../_nav';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  public NavContent: any;
  public NavHeader: any;
  public sidebarState: any;
  public language: any;

  @ViewChild('appSideNav') appSideNav: ElementRef;

  // hidden = false;
  public sidebarVisible: any;
  public sideBarMax: string;
  public sideBarMin: string;
  public sideBarClass: string;
  public currentUrl: string;
  public sidebarVisibility: boolean;
  constructor(
    private _dashboardService: DashboardService,
    private router: Router,
    private translate: TranslateService,
  ) {
    this.language = languages;
    this.translate.setDefaultLang(this.language[0].code);
    this.sidebarVisible = this._dashboardService.currentSidebarState;
    this.NavContent = navContent;
    this.NavHeader = navHeader;
    this.sidebarState = true;
    this.sideBarMax = 'sidebar-section';
    this.sideBarMin = 'sidebar-section-minimize';
    this.sideBarClass = this.sideBarMax;
    this.sidebarVisibility = false;

    this.router.events.subscribe( event => {
      if ( event instanceof NavigationEnd ) {
        this.currentUrl = event.urlAfterRedirects; // event.url is not enought to handle case bad path and login redirection 
        this.handleSidebarVisibility();
      }
    });

  }


  ngOnInit() {
    this.updateSidebarToggle();
  }

  handleSidebarVisibility(){
    this.currentUrl == '/login' || this.currentUrl == '/' ? this.sidebarVisibility = false:this.sidebarVisibility = true;
  }

  openSideBar() {
    this._dashboardService.openNav();
    // console.log(this.sidebarState)
  }

  closeSideBar() {
    this._dashboardService.closeNav();
  }

  minimizeSideBar() {
    this.sideBarClass = this.sideBarMin;
  }

  maximizeSideBar() {
    this.sideBarClass = this.sideBarMax;
  }

  ngAfterViewInit() {
    this._dashboardService.appSideNav = this.appSideNav;
  }

  public updateSidebarToggle() {
    this._dashboardService.currentSidebarState.subscribe( (state: any) => {
        this.sidebarState = state;
    });
  }
}