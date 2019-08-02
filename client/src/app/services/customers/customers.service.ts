import { Injectable } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoaderState } from '../../interfaces/loader/loader';

// Rxjs
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

// components
import { NotifBarMaterialComponent } from 'src/app/components/notif-bar-material/notif-bar-material/notif-bar-material.component';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor( public activatedRoute: ActivatedRoute,
               public router: Router,
               private http: HttpClient,
               private snackBar: MatSnackBar
  ) { }

  private handleError( errorResponse: HttpErrorResponse ) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error('cliente Side Error', errorResponse.error.message);
      this.openNotifBar(errorResponse.error.message,'notif-wrong');
    } else {
      console.error('Server Side Error', errorResponse);
    }
    return throwError('there is a problem with the service. We are working to solve that..thx U');
  }

  /*
  ************************************************
  ************** Interceptor ******
  ************************************************
  */

  show() {
    this.loaderSubject.next(<LoaderState>{show:true});
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{show:false});
  }

  public getCustomers( resource: string): Observable<any> {
    return this.http.get(`${environment.url}${resource}`)
               .pipe(catchError(this.handleError));
  }

  /**
   * getCustomerByResourceId
   */
  public getCustomerByResourceId( resourceBase: string, id: number, resourceRelated: string): Observable<any> {
    console.log(`${environment.url}${resourceBase}/${id}/${resourceRelated}`);
    return this.http.get(`${environment.url}${resourceBase}/${id}/${resourceRelated}`)
               .pipe(catchError(this.handleError));
  }

  /*
  ************************************************
  ************** OpenNotifBar *******************
  ************************************************
  */

  public openNotifBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(NotifBarMaterialComponent, {
        data: message,
        panelClass: panelClass,
        duration: 100000
    });
  }
}
