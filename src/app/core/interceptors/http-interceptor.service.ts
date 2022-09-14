import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { catchError, filter, Observable, tap, throwError } from 'rxjs';
import { HTTP_STATUS_CODE } from './http.codes';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let authReq = req;
    const CustomMsg = req.headers.get('CustomMsg');

    authReq = req.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });

    return next.handle(req)
      .pipe(
        filter(res => res instanceof HttpResponse),
        tap({
          next: (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

              // first check if 'CustomMsg' exists in the response's headers
              // (this means that our API server is sending a special message through CustomMsg)

              if (event.url?.includes('assets') || !CustomMsg) { return; }

              console.log('Alert todo');
              
              // this.alert.openSnackBar(
              //   this.translate.instant(CustomMsg), 'success'
              // );
            }
          }, error: (err: any) => {
            if (err instanceof HttpErrorResponse) {

              const status = err.status;
              // const serverError = err?.error?.detail;

              let msg = CustomMsg ||
                (status === 502)
                ? 'Error 502, lost connection!'
                : `SERVER ERROR: ${status}, server error!`;

              if (
                CustomMsg === 'NoAlert' ||
                status === HTTP_STATUS_CODE.UNAUTHORIZED ||
                err.url?.includes('assets')
              ) {
                return;
              }

              console.log('Alert todo');
              // this.alert.openSnackBar(
              //   this.translate.instant(msg)
              // );
            }
          }
        }),
        catchError((err: HttpErrorResponse) => throwError(() => err)),
      );
  }

}
