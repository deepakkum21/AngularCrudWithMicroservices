import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BotServiceService {

  public rasaUrl = 'http://localhost:5005/webhooks/rest/webhook';
  errorMessage = "";

  constructor(private http: HttpClient) { }

  callBot(message: any): Observable<any> {
    console.log('service', message);
    return this.http
      .post<any>(this.rasaUrl, message, { observe: 'response' })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Problem connecting to the server`;
      this.errorMessage = error.message;
      console.log('Sever error');
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  downloadFile(fileName: string) {
    // we would call the spring-boot service
    const REQUEST_PARAMS = new HttpParams().set('filename', fileName);
    console.log('service file :    -  ', fileName);
    const REQUEST_URI = '/server/downloadfile';
    return this.http.get(REQUEST_URI, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    })
  }

  downloadVideo(fileName: string) {
    // we would call the spring-boot service
    const REQUEST_PARAMS = new HttpParams().set('filename', fileName);
    console.log('service file :    -  ', fileName);
    const REQUEST_URI = '/server/video';
    return this.http.get(REQUEST_URI, {
      params: REQUEST_PARAMS,
      responseType: 'arraybuffer'
    })
  }
}
