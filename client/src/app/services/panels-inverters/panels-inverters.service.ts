import { Injectable } from '@angular/core';
import { Subject, throwError, Observable } from 'rxjs';
import { LoaderState } from 'src/app/interfaces/loader/loader';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PanelsInvertersService {

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  constructor( public activatedRoute: ActivatedRoute,
               public router: Router,
               private http: HttpClient
  ) { }

  private handleError( errorResponse: HttpErrorResponse ) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error('cliente Side Error', errorResponse.error.message);
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

  public getPanelsInverters( resource: string): Observable<any> {
    return this.http.get(`${environment.url}${resource}`)
               .pipe(catchError(this.handleError));
  }
}
