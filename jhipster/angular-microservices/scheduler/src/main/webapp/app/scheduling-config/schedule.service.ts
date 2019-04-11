import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Destiantionmodel } from 'app/model/destiantionmodel';
import { SchedulerEntity } from 'app/model/SchedulerEntity';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private _http: HttpClient) { }

  scheduleJob(scheduleconfig: SchedulerEntity): Observable<void> {
    return this._http.post<void>(SERVER_API_URL + 'api/postDestination', scheduleconfig, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

  getDestinationData() {
    return new Promise(resolve => {
      this._http.get<Destiantionmodel[]>(SERVER_API_URL + 'api/getDestinationData').subscribe(data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API
        resolve(data);
        return data;
      });
    });
  }

  getDestination(): Observable<Destiantionmodel[]> {
    return this._http.get<Destiantionmodel[]>(SERVER_API_URL + 'api/getDestinationData').pipe(catchError(this.handleError));
  }

  getSourceData() {
    return new Promise(resolve => {
      this._http.get<Destiantionmodel[]>(SERVER_API_URL + 'api/getSourceData').subscribe(data => {
        // SHOW A MESSAGE RECEIVED FROM THE WEB API
        resolve(data);
        return data;
      });
    });
  }
}
