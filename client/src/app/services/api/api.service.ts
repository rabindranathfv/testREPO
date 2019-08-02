import { Injectable, Inject } from '@angular/core';
import { apiBase } from './apiBase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from './api';
// import * as axios from 'axios';
import { Cookie } from './cookie';
import * as alertify from 'alertifyjs';

// import * as jwt from 'jsonwebtoken';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  limit = 100;
  private rutas = {
    login: 'auth/login'
  };
  constructor(
    @Inject(apiBase) private base,
    private http: HttpClient,
    private jwt: JwtHelperService
  ) { }
  public request(ruta) {
    // console.log(ruta);
    // const base = this.base;
    const limit = this.limit;
    const httpRequest = (config) => this.httpRequest(config);
    return function () {
      let url = ruta;
      let queries = '';
      let requestMethod = 'GET';
      let requestBody = {};
      const headers: string[] = [];
      function queryParam (param, value) {
        const concat = queries === '' ? '?' : '&';
        queries = `${queries}${concat}${param}=${value}`;
        return this;
      }
      if (limit) {
        queryParam('limit', limit);
      }
      return {
        test: function() {
          console.log(`${url}${queries}`);
          return this;
        },
        url: () => `${url}${queries}`,
        send: () => {
          // console.log(queryParam)
          url = `${url}${queries}`;
          return httpRequest({
            url: url,
            method: requestMethod,
            body: requestBody,
            headers,
          });
        },
        method: function (value) {
          requestMethod = value;
          return this;
        },
        id: function ( identificador ) {
          url = `${url}/${ identificador }`;
          return this;
        },
        child: function (param) {
          url = `${url}/${param}`;
          return this;
        },
        body: function (params) {
          requestBody = params;
          return this;
        },
        queryParam: queryParam,
        /* queryParam: function (param, value) {
          const concat = queries === '' ? '?' : '&';
          queries = `${queries}${concat}${param}=${value}`;
          return this;
        }, */
        headers: function (key, value) {
          headers.push(`${key}:${value}`);
        },
        post: function() {
          this.method('post');
          return this;
        },
        put: function() {
          this.method('put');
          return this;
        },
        get: function() {
          this.method('get');
          return this;
        },
        delete: function() {
          this.method('delete');
          return this;
        },
      };
    }();
  }
  private httpRequest(config: Api ) {
    // console.log(config);
    const url = `${this.base}/${config.url}`;
    // const url = config.url;
    const method = config.method;
    const body = config.body;
    const headers = this.prepareHeaders(config.headers);
    const params: any = {};
    params.withCredentials = true;
    params.headers = headers;
    params.body = body ? body : null;
    params.responseType = 'json';
    // {message: string, object: any[], status: number}
    const promesaRespuesta: Promise<any> = this.http.request<String>( method, url, params)
    .toPromise();
    const respuesta = promesaRespuesta.then( res => {
      console.log(res);
      // let decoded = res;
      if (res.object ) {
        return res.object;
        /* const decoded = this.jwt.decodeToken(res.object);
        console.log(decoded);
        return decoded;
      } else { */
        // return [];
      }
      // console.log(decoded);
      /* if (config.url === this.rutas.login) {
        try {
          decoded = this.jwt.decodeToken(res.object);
        } catch (e ) {
          console.log(e);
        }
        // console.log(res);
        // https://blog.angular-university.io/angular-jwt-authentication/
        // const decoded = this.jwt.decodeToken(res);
        // const geter = this.jwt.getTokenExpirationDate(res.object);
        // console.log('');
        // console.log(geter);
        // console.log(decoded);
        environment.token = res.object;
        // const respuesta = jwt.verify(res.object, '', {
        //  issuer: '1',
        //  subject: '2',
        //   audience: '3'
        // });
        // console.log(respuesta);

        // return decoded;
      }
      // console.log(decoded);
      return decoded; */
      // return this.jwt.decodeToken(res);
      // res.object = res.object.reverse();
    }).then( decoded => {
      console.log(decoded.object);
      return decoded;
    });
    respuesta.catch( error => {
      // console.log(error);
      return error;
      // alertify.error(error.statusText).dismissOthers();
    });
    return respuesta;
    /* return promesaRespuesta.then( data => {
      console.log(data);
      return data;
    }); */
  }
  private prepareHeaders( headers? ) {
    let httpHeaders = new HttpHeaders();
    if (!headers) {
      return null;
    }
    for (let index = 0; index < headers.length; index++) {
      const element = headers[index];
      const values = element.split(':');
      httpHeaders = httpHeaders.append(values[0], values[1]);
    }
    return httpHeaders;
  }

  public checkLogin() {
    return this.request('auth/login').send();
  }
}
