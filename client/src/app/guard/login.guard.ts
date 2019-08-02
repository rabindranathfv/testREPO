import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api';
import { navContent } from 'src/app/_nav' 
@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor (
    private http: ApiService,
    private router: Router,
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.http.checkLogin()
      .then(res => {
        const loggedIn = res.loggedIn;
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        }
        return loggedIn;
      });
  }
}
@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {
  public NavContent : any
  constructor (
    private http: ApiService,
    private router: Router,
  ) {

    this.NavContent=navContent
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.http.checkLogin()
      .then(res => {
        const loggedIn = res.loggedIn;
        console.log('LLLLLLLLLLLLLLLLLLLL');
        console.log(loggedIn);
        
        
        if (loggedIn) {
          this.router.navigateByUrl(this.NavContent[0].url);
        }

        return !loggedIn;
      });
  }
}
