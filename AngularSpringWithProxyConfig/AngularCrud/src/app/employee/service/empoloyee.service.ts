import { Injectable } from '@angular/core';
import { EmployeeModel } from '../../models/employee-model';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpoloyeeService {
  // employeesList: EmployeeModel[] = [
  //   {
  //     id: 1,
  //     name: 'Mark',
  //     gender: 'Male',
  //     contactPreference: 'Email',
  //     email: 'mark@pragimtech.com',
  //     dateOfBirth: new Date('10/25/1988'),
  //     department: '3',
  //     isActive: true,
  //     photoPath: 'assets/images/mark.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mary',
  //     gender: 'Female',
  //     contactPreference: 'Phone',
  //     phoneNumber: 2345978640,
  //     dateOfBirth: new Date('11/20/1979'),
  //     department: '2',
  //     isActive: true,
  //     photoPath: 'assets/images/mary.png'
  //   },
  //   {
  //     id: 3,
  //     name: 'John',
  //     gender: 'Male',
  //     contactPreference: 'Phone',
  //     phoneNumber: 5432978640,
  //     dateOfBirth: new Date('3/25/1976'),
  //     department: '3',
  //     isActive: false,
  //     photoPath: 'assets/images/john.png'
  //   },
  // ];

  constructor(private _httpClient: HttpClient) { }

  // getEmployeeList(): Observable<EmployeeModel[]> {
  //   // used delay to delay the data to be passed since in realworld due to network data might get delay
  //   return of(this.employeesList);
  // }

  getEmployeeList(): Observable<EmployeeModel[]> {
    // used delay to delay the data to be passed since in realworld due to network data might get delay
    return this._httpClient.get<EmployeeModel[]>('/api/employee').pipe(catchError(this.handleError));
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

  // for hard coded
  // getEmployee(id: number) {
  //   return this.employeesList.find(emp => emp.id === id);
  // }

  getEmployee(empId: number): Observable<EmployeeModel> {
    const getURL = 'http://localhost:8002/employee';
    return this._httpClient.get<EmployeeModel>(`${getURL}/${empId}`).pipe(catchError(this.handleError));
  }

  // when using hard coded data
  // saveEmployee(newEmployee: EmployeeModel) {
  //   if (newEmployee.id === null) {
  //     const maxEmpId = this.employeesList.reduce(function (emp1, emp2) {
  //       return (emp1.id > emp2.id) ? emp1 : emp2;
  //     }).id;
  //     newEmployee.id = maxEmpId + 1;
  //     this.employeesList.push(newEmployee);
  //   } else {
  //     const foundIndex = this.employeesList.findIndex(emp => emp.id === newEmployee.id);
  //     this.employeesList[foundIndex] = newEmployee;
  //   }
  // }

  addEmployee(newEmployee: EmployeeModel): Observable<EmployeeModel> {
    return this._httpClient.post<EmployeeModel>('/api/employee/addemployee', newEmployee,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));

    // this.employeesList.push(newEmployee);
  }

  updateEmployee(updatedEmployee: EmployeeModel): Observable<void> {
    const updateURL = 'http://localhost:8003/employee';
    return this._httpClient.put<void>(`${updateURL}/${updatedEmployee.id}`, updatedEmployee,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).pipe(catchError(this.handleError));

  }


  // for hard coded
  // deleteEmployee(empId: number) {
  //   const indexToBeDeleted = this.employeesList.findIndex(emp => emp.id === empId);
  //   if (indexToBeDeleted !== -1) {
  //     this.employeesList.splice(indexToBeDeleted, 1);
  //   }
  // }

  deleteEmployee(empId: number): Observable<void> {
    const deleteURL = 'http://localhost:8004/employee';
    return this._httpClient.delete<void>(`${deleteURL}/${empId}`).pipe(catchError(this.handleError));
  }
}
