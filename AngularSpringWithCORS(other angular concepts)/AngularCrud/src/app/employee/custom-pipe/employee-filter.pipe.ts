import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from '../../models/employee-model';

@Pipe({
  name: 'employeeFilter',
  // pure pipes only work when there is a  change in the primitive data type or refernced variable i.e.
  // for referenced variable refrence should change not the value of a property of that reference variable
  // to make work for change in property value for reernce variable with not change in reference variable
  // make pure: false but it is not recomended as it will execute for every change in anything like mousemove also
  // thus will impact in performance so recomended to use filter and sorting logic in component class
  pure: true
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees: EmployeeModel[], searchText: string): any {
    if (!employees || ! searchText) {
      return employees;
    }
    return employees.filter( employee => employee.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
