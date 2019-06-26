import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmpoloyeeService } from './empoloyee.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {

  constructor(private _employeeService: EmpoloyeeService, private _router: Router) { }

  // for hard coded
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
  //   const employeeExists: boolean = !!this._employeeService.getEmployee(+route.paramMap.get('id'));

  //   if (employeeExists) {
  //     return true;
  //   } else {
  //     this._router.navigate(['notfound']);
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._employeeService.getEmployee(+route.paramMap.get('id')).pipe(
      map(employee => {
        const employeeExists: boolean = !!employee;
        if (employeeExists) {
          return true;
        } else {
          this._router.navigate(['notfound']);
          return false;
        }
      }),
      catchError((error) => {
        console.log(error);
        return of(false);
      })
    );

  }
}
