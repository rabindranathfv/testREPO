import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenP = '123';
  public get token() {
    return this.tokenP;
  }
  constructor() { }
}
