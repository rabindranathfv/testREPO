import { HttpHeaders } from '@angular/common/http';

export interface Api {
    url: string;
    method: string; // 'GET' | 'POST' | 'PUT'| 'DELETE';
    headers?: HttpHeaders;
    body?: any;
}
export interface Methods {
    method: 'GET' | 'POST' | 'PUT'| 'DELETE';
}
