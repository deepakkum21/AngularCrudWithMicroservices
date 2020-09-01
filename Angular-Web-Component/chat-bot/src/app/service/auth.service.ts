import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = '/server/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin = false;

  constructor(private _http: HttpClient) { }

  setIsLoggedIn(isLoggedin: boolean) {
    this.isLoggedin =isLoggedin;
  }

  isLoggedIn(): boolean {
    return this.isLoggedin;
  }

  login(credentials): Observable<any> {
    return this._http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  // downloadFile(fileName: string) {
  //   // we would call the spring-boot service
  //   const REQUEST_PARAMS = new HttpParams().set('filename', fileName);
  //   console.log('service file :    -  ',fileName);
  //   const REQUEST_URI = '/server/downloadfile';
  //   return this.http.get(REQUEST_URI, {
  //     params: REQUEST_PARAMS,
  //     responseType: 'arraybuffer'
  //   })
  // }
}
