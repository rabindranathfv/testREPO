import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from '../services/api';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private http: ApiService,
    private router: Router,
    private jwtHelper: JwtHelperService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log(next);
    // console.log(state);
    // const tok = this.jwtHelper.tokenGetter();
    // console.log(this.jwtHelper.getTokenExpirationDate());
    return true;
    /* return this.http.checkLogin()
      .then(res => {
        const loggedIn = res.loggedIn;
        if (!loggedIn) {
          this.router.navigateByUrl('');
        }
        return loggedIn;
      }); */
  }
}
