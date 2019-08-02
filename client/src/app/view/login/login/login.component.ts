import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import { NotifBarMaterialComponent } from 'src/app/components/notif-bar-material/notif-bar-material/notif-bar-material.component';
import { MatDialog , MatBottomSheet, MatSnackBar} from '@angular/material';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {};
  wait;
  loginForm: FormGroup;
  public hide = true;
  public loginTitleLabel: string;
  public loginConnectlabel: string;
  public forgetPassLink: string;
  public forgetIdLink: string;

  // notif
  public messageNotifLogin: string;
  public messageNotifNoLogin: string;
  public successStyle: string;
  public wrongStyle: string;
  public infoStyle: string;
  public neutralStyle: string;

  // internationalization
  public defaultLanguage: string;
  public pswPlacehold: string;

  errorText = {
    visible: false
  };

  usersTest = [{
      email: 'solartracker@forcast.cl',
      password: 'password',
    },
    {
      email: 'cliente@prueba.com',
      password: 'password',
    },
  ];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private translate: TranslateService
  ) {

    this.loginTitleLabel = 'solar tracker';
    this.messageNotifLogin = 'Usuario correcto';
    this.messageNotifNoLogin = 'Usuario incorrecto, verifique sus credenciales';
    this.successStyle = 'notif-success';
    this.wrongStyle = 'notif-wrong';
    this.infoStyle = 'notif-info';
    this.neutralStyle = 'notif-neutral';
    this.defaultLanguage = 'es';
  }

  ngOnInit() {
    this.loadLoginForm();
    this.translate.setDefaultLang(this.defaultLanguage);
  }

  login( ) { }

  /**
   * LoadTextNotififBar
   */
  public LoadTextNotififBar() {
    this.translate.get('loginModule.messageNotififLogin.loginSucess').subscribe( (text: string) => {
      console.log(text);
      this.messageNotifNoLogin = text;
    });
  }

  /**
   * loadLoginForm
   */
  public loadLoginForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  /**
   * existUser
   */
  public existUser( user: any): boolean {
    const userEmail = user.email;
    const userPasswd = user.password;
    return this.usersTest.some( (users: any) => {
      return (users.email === userEmail && users.password === userPasswd);
    });
  }

  /**
   * loginEasy
   */
  public loginEasy() {
    console.log(this.loginForm.value);
    const userData = this.loginForm.value;
    if (userData) {
      if ( this.existUser(userData) ) {
        this.router.navigateByUrl('clientes');
        this.openNotifBar(this.messageNotifLogin, this.neutralStyle);
        // this.openNotifBar(this.translate.instant('loginModule.messageNotififLogin.loginSucess'), this.neutralStyle);
      } else {
        // agregar detalles de acceso incorrecto
        console.log('USUARIO INCORRECTO');
        this.openNotifBar(this.messageNotifNoLogin, this.neutralStyle);
        // this.openNotifBar(this.translate.instant('loginModule.messageNotififLogin.loginFailure'), this.neutralStyle);
      }
    }
  }

  /**
   * openNotifiBar
  */
  openNotifBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(NotifBarMaterialComponent, {
      data: message,
      panelClass: [`${panelClass}`],
      duration: 3000
    });
    }

}
