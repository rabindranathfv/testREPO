import { Injectable, Inject } from '@angular/core';
import { apiBase } from './apiBase';
import { ApiService } from './api.service';
import { from, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  elements: any = {};
  /* userObservable = Observable.create(function(observer) {
    observer.next('');
    // observer.next('World');
  }); */
  userSubject = new BehaviorSubject({});
  constructor(
    @Inject(apiBase) private base,
    private http: ApiService,
  ) {
    // console.log(this.elements);
    /* this.elements['userObservable'] = Observable.create((observer)=> {
      observer.next('0');
    }); */
  }
  public static session() {
    return () => {
      return {
        set: ( clave, valor ) => {
          sessionStorage.setItem( clave, valor );
        },
        get: ( clave ) => {
          return sessionStorage.getItem(clave);
        },
        delete: clave => {
          sessionStorage.removeItem(clave);
        }
      };
    };
  }
  me() {
    if (!this.elements['usersession']) {
      this.http.request('me').send()
      .then(response => {
        this.userSubject.next(response.object[0]);
        // this.userObservable.
        /* this.userObservable = from(new Promise(resolve => {
          resolve(response.object[0]);
        }));
        console.log(this.elements); */
      })
      .catch( err => {
        console.error(err);
      });
    }
  }
  public save( ruta, valor ) {
    this.me();
    // console.log(ruta);
    this.elements[ruta] = valor;
    // console.log(this.elements);
  }
  public get( ruta ) {
    this.me();
    console.log(ruta);
    const x = this.elements[ruta];
    if (!x) {
      return new Promise( (resolve, reject) => {
        this.http.request(ruta).send().then( res => {
          resolve(res.object[0]);
        });
      });
    }
    if (x) {
      return Promise.resolve(x);
    }
  }
}
