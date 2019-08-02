import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { LoaderState } from '../../interfaces/loader/loader';
// RxJs
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit {

  public savedDatas = [];

  private subject = new BehaviorSubject({ id: null, typeData: null });
  dataShare: Observable<any> = this.subject.asObservable();

  private subjectMock1 = new BehaviorSubject({});
  currentSubjectMock1 = this.subjectMock1.asObservable();

  private subjectMock2 = new BehaviorSubject({});
  currentSubjectMock2 = this.subjectMock2.asObservable();

  private formSubject = new BehaviorSubject({});
  currentformSubject = this.formSubject.asObservable();

  private loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

// sidebar menu
  public appSideNav: any;
  private sidebarToggle = new BehaviorSubject(true);
  currentSidebarState = this.sidebarToggle.asObservable();

// Mock datas for Dynamic form exemple

  public CreateDefinator: any;
  public DynamicFormDatas: any;

// Mock subject for filter exemple
  private subjectChart = new BehaviorSubject({});
  currentSubjectChart = this.subjectChart.asObservable();

// Aside
  private asideSubject = new BehaviorSubject({});
  currentAsideData: Observable<any> = this.asideSubject.asObservable();

//Association Subject to pass datas from Modals body to modals footer
private associateSubject = new BehaviorSubject({});
currentAssociate: Observable<any> = this.associateSubject.asObservable();

// Update after changes (For association, edit and create)
private updateAfterChange = new BehaviorSubject({});
changeSignal: Observable<any> = this.updateAfterChange.asObservable();


  constructor( public activatedRoute: ActivatedRoute,
               public router: Router,
               private http: HttpClient
    ) {}

  ngOnInit(): void {

  }

  private handleError( errorResponse: HttpErrorResponse ) {
    if ( errorResponse.error instanceof ErrorEvent) {
      console.error('cliente Side Error', errorResponse.error.message);
    } else {
      console.error('Server Side Error', errorResponse.error.message);
    }
    return throwError('there is a problem with the service. We are working to solve that..thx U');
  }

  /**
   * loadData used in modals-footer component !
   */
  public loadData( resource: string ): Observable<any> {
    // console.log('USING LOAD DATA');
    console.log(`consulta del recurso ${environment.url}${resource}`);
    return this.http.get(`${environment.url}${resource}`)
                .pipe( catchError(this.handleError), );
  }


    /*
  ************************************************
  ************** Exemple Behavior Subject ********
  ************************************************
  */

  /**
   * changesForm allows to get the form whem it is valid by Type
   */
  // public changesForm( form: any, type: string ) {
  //     if ( type === 'exemple1' ) {
  //     this.subjectMock1.next(form);
  //   } else if ( type === 'exemple2' ) {
  //     this.subjectMock2.next(form);
  //   }
  // }

  /*
  ************************************************
  ************** Exemple  HTTP REQUESTS **********
  ************************************************
  */


  /**
   * CRUD Operation - use with refactor modals, dynamic form
   */


  public updateResource( resource: string, data: any, id: number): Observable<any> {
    // variable: all means all fields will update with one single request to de API
    console.log(data);
    data.value['variable'] = 'all';
    return this.http.put<void>(`${environment.url}/${resource}/${id}`, data.value, {
                      headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                      })
                    }).pipe(catchError(this.handleError));
  }


  public deleteResource( resource: string, id: any ): Observable<any> {
    console.log(`${environment.url}/${resource}/${id}`);
    return this.http.delete(`${environment.url}/${resource}/${id}`)
               .pipe(catchError(this.handleError));
  }


  public createResource( resource: string , customer: any  ): Observable<any> {
    return this.http.post<any>(`${environment.url}/${resource}`, customer, {
              headers: new HttpHeaders({
                'Content-Type': 'application/json'
              })
            }).pipe(catchError(this.handleError));
  }

  /**
   * Dynamic Form ( Definator + useful functions) 
   */

  public getFormByType( resource: string , method: string ): Observable<any> {
    console.log(`enter into getFormByType with resource as ${resource} and method as ${method}`);
    if ( method === 'show' ) {
      console.log(`${environment.url}${resource}/definitor?operation=${method}`);
      return this.http.get(`${environment.url}${resource}/definitor?operation=${method}`)
                 .pipe(catchError(this.handleError));
    } else if ( method === 'create' ) {
      console.log(`${environment.url}${resource}/definitor?operation=${method}`);
      return this.http.get(`${environment.url}${resource}/definitor?operation=${method}`)
                 .pipe(catchError(this.handleError));
    } else if ( method === 'put' ) {
      console.log(`${environment.url}${resource}/definitor?operation=${method}`);
      return this.http.get(`${environment.url}${resource}/definitor?operation=${method}`)
                 .pipe(catchError(this.handleError));
    } else if ( method === 'delete' ) {
      console.log(`${environment.url}${resource}/definitor?operation=${method}`);
      return this.http.get(`${environment.url}${resource}/definitor?operation=${method}`)
                 .pipe(catchError(this.handleError));
    }
  }


  public getById( id: number, resource: string ): Observable<any> {
    return this.http.get(`${environment.url}${resource}/${id}`)
               .pipe(catchError(this.handleError));
  }

  /* Card Definitor */
  public getCardInfo(resource: string): Observable<any> {
    return this.http.get(`${environment.url}${resource}/definitor?operation=info`)
               .pipe(catchError(this.handleError));
  }

  /* Table definitor */
  public getTableInfo(resource: string): Observable<any> {
    return this.http.get(`${environment.url}${resource}/definitor?operation=info_table`)
               .pipe(catchError(this.handleError));
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


  /*
  ************************************************
  ************** Exemple Filters + Charts ******
  ************************************************
  */
 /**
  * getFilters
  */
  public getFilters(): Observable<any> {
   console.log(`${environment.url}filters`);
   return this.http.get(`${environment.url}filters`)
   .pipe(catchError(this.handleError));
  }

  /**
   * getFilters
   */
  public getFilterOptions(optionsUrl: string): Observable<any> {
    return this.http.get(`${environment.url}${optionsUrl}`)
    .pipe(catchError(this.handleError));
  }

  /**
   * getZonaCensalFilters
   */
  public getChartsByParam(filtersEnabled: any, category?: any, dateStart?: any, dataEnd?: any): Observable<any> {

    const params = [((filtersEnabled['cluster']) ? `cluster=${filtersEnabled['cluster']}` : null),
                    ((filtersEnabled['commune']) ? `commune=${filtersEnabled['commune']}` : null),
                    ((filtersEnabled['censal_zone']) ? `censal_zone=${filtersEnabled['censal_zone']}` : null),
                    ((filtersEnabled['gse']) ? `gse=${filtersEnabled['gse']}` : null),
                    ((filtersEnabled['frequency']) ? `frequency=${filtersEnabled['frequency']}` : null),
                    ((category) ? `category=${category}` : null),
                    ((dateStart) ? `start_date=${dateStart}` : null),
                    ((dataEnd) ? `end_date=${dataEnd}` : null)
                  ];

    const paramsClean = params.filter( (item) => item);
    console.log(`${environment.url}graphs?${paramsClean.join('&')}`);
    return this.http.get(`${environment.url}graphs?${paramsClean.join('&')}`)
               .pipe(catchError(this.handleError));
  }

  /**
  * updateChart
  */
  public updateChart( chart: any) {
  // this.subjectChart.next(chart);
  }

  /**
  * updateFilterCensal
  */
  public updateFilterCensal( showCensal: any) {
  // this.subjectFilterCensal.next(showCensal);
  }

    /*
    ************************************************
    ************** SideBar ******
    ************************************************
    */

  public closeNav() {
    this.appSideNav.close();
    this.sidebarToggle.next(false);
  }

  public openNav() {
    this.appSideNav.open();
    this.sidebarToggle.next(true);
  }

    /*
    ************************************************
    ************** Aside ******
    ************************************************
    */

  public updateDataAside( data ) {
    this.asideSubject.next( data );
  }

    /*
    ************************************************
    ************** Platform IOT ******
    ************************************************
    */

  public getDatas( resource: string): Observable<any> {
    console.log(`${environment.url}${resource}`);
    return this.http.get(`${environment.url}${resource}`)
               .pipe(catchError(this.handleError));
  }

  public getFormBuilder(resource: string, definitor: string): Observable<any> {
      console.log(`${environment.url}${resource}/definitor?operation=${definitor}`);
      return this.http.get(`${environment.url}${resource}/definitor?operation=${definitor}`)
                 .pipe(catchError(this.handleError));
  }

   /**
   * changesForm allows to get the form whem it is valid by Type
   */
  public changesForm( form: any, type: string ) {
      this.formSubject.next(form);
    }

    /*
    ************************************************
    ************** Association ******
    ************************************************
    */

   public updateDataAssociate( data ) {
    this.associateSubject.next( data );
    }

    
  public updateAssociate( resource: string,  id: number, data: any): Observable<any> {
    // variable: all means all fields will update with one single request to de API
    console.log(id);
    console.log(data);
    console.log(`${environment.url}${resource}/${id}`, data);

    // Temporary solution
    let variable = Object.keys(data)[0];
    let dato = data[variable];
    console.log("service update datas, Variable = ", variable, " dato  =", dato );
    return this.http.put<void>(`${environment.url}${resource}/${id}?variable=${variable}&dato=${dato}`,{})
               .pipe(catchError(this.handleError));
  }

     /*
    ****************************************************************************
    ************** Update after changes (For association, edit and create) *****
    ****************************************************************************
    */ 


   public updateChangesView( data ) {
    this.updateAfterChange.next( data );
  }

}

