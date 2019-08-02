import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NotifBarMaterialComponent } from '../components/notif-bar-material/notif-bar-material/notif-bar-material.component';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(
        private spinner: NgxSpinnerService,
        private snackBar: MatSnackBar
    ) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.showLoader();
        const token: string = localStorage.getItem('token');

        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {

                if (event instanceof HttpResponse) {
                    this.onEnd();
                    // this.openNotifBar('This http request is a success','notif-success');
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                this.onEnd();
                this.openNotifBar('Error del servidor','notif-wrong');
                let data = {};
                data = {
                    reason: error && error.error.reason ? error.error.reason : '',
                    status: error.status
                };
                return throwError(error);
            }));
    }


        
    private onEnd(): void {
        this.hideLoader();
    }

    private showLoader(): void {
        this.spinner.show();

      }

    private hideLoader(): void {
        this.spinner.hide();
      }

    public openNotifBar(message: string, panelClass: string) {
        this.snackBar.openFromComponent(NotifBarMaterialComponent, {
            data: message,
            panelClass: panelClass,
            duration: 100000
        });
    }
}

