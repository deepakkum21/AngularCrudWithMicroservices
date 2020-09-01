import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class BasicInterceptorService implements HttpInterceptor {
  constructor() {
   }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    //const currentUser = this.authenticationService.currentUserValue;
    // if (currentUser && currentUser.authdata) {
    request = request.clone({
      setHeaders: {
        Authorization: `Basic `
      }
    });
    //}
    return next.handle(request)
    .pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        console.log('----------------------------',error)
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          if(error.status === 404) {
            window.alert('Resource Not Found');
            return throwError(errorMessage);
          }
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}