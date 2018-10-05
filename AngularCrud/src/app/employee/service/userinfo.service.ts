import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { UserInfoModel } from '../../models/user-info-model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  userInfoURL: 'http://localhost:8005/userInfo';
  constructor(private _httpClient: HttpClient) { }

  public addUserInfo(newUserInfo: UserInfoModel): Observable<UserInfoModel> {
    console.log('before calling url' + newUserInfo);
    return this._httpClient.post<UserInfoModel>('http://localhost:8005/userInfo', newUserInfo,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    // return an observable with a meaningful error message to the end user
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
  }
}
