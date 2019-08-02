import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cookie {
  private key = 'TVdVNE5UTmlNMlkxWTJZMVpUQXpZVEkyWldKaU9ESXpNVGd5Wmpnek16VQ';
  private claveSesion = 'U1hwTlZHZDVXbXBuZWsxNlZUTWxreFdUSlpNVnBVUVZFa3lXbGRLYVU5qv';
  hours = 1;
  constructor(
    private cookie: CookieService
  ) {

  }
  private _token;
  public set token( t ) {
    this.setToken(t);
  }

  public get token () {
    return this.getToken();
  }
  getToken() {
    const clave = btoa(this.claveSesion);
    // let token = this._token ? this._token : sessionStorage.getItem(clave);
    let token = this._token ? this._token : this.cookie.get(clave);
    token = atob(`${token}`);
    token = token.split('.')[0];
    if (!this.cookie.check(btoa(this.claveSesion))) {
      // return this.router.navigateByUrl('');
      return false;
    }
    return token;
  }
  deleteToken() {
    this.setToken('', 0);
    this.cookie.deleteAll();
  }
  setToken(val, hours = 24) {
    const value = btoa(`${val}.${this.key}`);
    // sessionStorage.setItem(btoa(this.claveSesion), value);
    const expires = moment().add(hours, 'hour').toDate();
    this.cookie.set(btoa(this.claveSesion), value, expires);
    this._token = value;
  }
  saveValue(key, value) {
    const clave = btoa(`${key}.${this.key}`);
    const val = btoa(`${value}.${this.key}`);
    this.cookie.set(clave, val, this.hours);
    // if (this.cookie.check())
  }
  getValue(key) {
    const clave = btoa(`${key}.${this.key}`);
    const val = atob(this.cookie.get(clave)).split('.')[0];
    return val;

  }
}
