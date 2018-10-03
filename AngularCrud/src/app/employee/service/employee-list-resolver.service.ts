import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeModel } from '../../models/employee-model';
import { Observable, of } from 'rxjs';
import { EmpoloyeeService } from './empoloyee.service';
import { ResolvedEmployeeList } from '../../models/resolved-employee-list';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// (1) method for showing error w.r.t ListEmployeesComponent
// export class EmployeeListResolverService implements Resolve<ResolvedEmployeeList> {

//   constructor(private _employeeService: EmpoloyeeService) { }

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedEmployeeList> {
//     return this._employeeService.getEmployeeList().pipe(
//                                                     map((employeeList) => new ResolvedEmployeeList(employeeList, null)),
//                                                     catchError((error: any) => of(new ResolvedEmployeeList(null, error))));
//   }

export class EmployeeListResolverService implements Resolve<EmployeeModel[] | string> {

  constructor(private _employeeService: EmpoloyeeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmployeeModel[] | string> {
    return this._employeeService.getEmployeeList().pipe(
                                                    catchError((error: any) => of(error)));
  }
}
