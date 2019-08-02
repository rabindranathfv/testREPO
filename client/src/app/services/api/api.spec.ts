import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { apiBase } from './apiBase';



describe('apiService', () => {
  /* beforeEach( () => {
    TestBed.configureTestingModule({});
  }); */
  let service;
  // const service = new ApiService('http://apibase.com',);
  beforeEach( ( /* x */) => {
    // console.log(x);
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: apiBase,
          useValue: 'http://apibase.com'
        }
      ]
    });
    service = TestBed.get(ApiService);
  });
  it('Instanciación', () => {
    expect(service).toBeTruthy();
    // spyOn(service.request('x').solicitud()).and.returnValue(of('x'))
  });
  it ('Creación rutas', () => {
    expect(service.request('x').url()).toBe('http://apibase.com/x');
  });
  /* const service: ApiService = TestBed.get(ApiService);
  it ('xzasd', () => {
    expect(service).toBeTruthy();
  }); */
});
