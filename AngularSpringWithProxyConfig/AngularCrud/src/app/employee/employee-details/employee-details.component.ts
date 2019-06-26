import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpoloyeeService } from '../service/empoloyee.service';
import { EmployeeModel } from '../../models/employee-model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: EmployeeModel;
  employeeId: number;
  constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmpoloyeeService, private _router: Router) { }

  ngOnInit() {

    // params is deprecated method from angular@3 so use paramMap.get()
    // const id = +this._activatedRoute.snapshot.params['id'];
    // There are 2 ways to read the route parameter value (1) snapshot approach (2) observable approach
    // (1)Use snapshot approach if the route parameter value does not change and you only want to read the initial route parameter value.
    // Snapshot approach works fine, if you navigate to another component before navigating from the current employee to the next employee
    // this.employeeId = +this._activatedRoute.snapshot.paramMap.get('id');
    // this.employee = this._employeeService.getEmployee(this.employeeId);

    // (2)if you know the route parameter value changes, and if you want to react and execute some code in response to that change
    // Observable approach
    this._activatedRoute.paramMap.subscribe(params => {
      this.employeeId = +params.get('id');
      // for hard coded
      // this.employee = this._employeeService.getEmployee(this.employeeId);

      this._employeeService.getEmployee(this.employeeId).subscribe(
        (employee) => this.employee = employee,
        (error: any) => console.log(error)
      );
    });
  }

  viewNextEmployee() {
    if (this.employeeId < 3) {
      this.employeeId++;
    } else {
      this.employeeId = 1;
    }
    this._router.navigate(['/employee', this.employeeId],{
      queryParamsHandling: 'preserve'
    });
  }
}
