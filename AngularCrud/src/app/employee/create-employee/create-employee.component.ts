import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentModel } from '../../models/department-model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { EmployeeModel } from 'src/app/models/employee-model';
import { EmpoloyeeService } from '../service/empoloyee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { EditDialogComponent } from '../dialog/edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  departments: DepartmentModel[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' }
  ];

  private panelTitle: string;

  @ViewChild('employeeForm')
  public createEmployeeForm: NgModel;

  employee: EmployeeModel;

  showPreview = false;
  constructor(private _employeeService: EmpoloyeeService, private _route: Router, private _activatedRoute: ActivatedRoute,
    private myDialog: MatDialog) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',
        minDate: new Date(1900, 0, 1),
        maxDate: new Date()
      });
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(parameterMap => {
      const employeeId: number = +parameterMap.get('id');
      this.getEmployeeById(employeeId);
    });
  }

  private getEmployeeById(empId: number) {
    if (empId === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: '-1',
        isActive: null,
        photoPath: null
      };
      this.panelTitle = 'Create';
      this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit';
      // for hard coded
      // this.employee = Object.assign({}, this._employeeService.getEmployee(empId));

      this._employeeService.getEmployee(empId).subscribe(
        (employee) => this.employee = employee,
        (error: any) => console.log(error)
      );
    }
  }

  // if sending form data to show
  // saveEmployee(empForm: NgModel): void {
  //   // this will print all the property of NgForm like dirty, valid , value
  //   console.log(empForm);
  //   // this will print particular value of ngForm
  //   console.log(empForm.value);
  // }

  // when using hard coded
  // saveEmployee() {
  //   console.log(this.employee);
  //   const newCopiedEmployee: EmployeeModel = Object.assign({}, this.employee);
  //   this._employeeService.saveEmployee(newCopiedEmployee);
  //   this.createEmployeeForm.reset();
  //   this._route.navigate(['list']);
  // }

  saveEmployeeConfirmation() {
    let message: string;
    if (this.employee.id == null) {
      message = 'save';
    } else {
      message = 'update';
    }
    const dialogRef = this.myDialog.open(EditDialogComponent, {
      width: '500px',
      data: message
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the result: ' + result);
      if (result) {
        this.saveEmployee();
      }
    });
  }

  saveEmployee() {
    console.log(this.employee);
    if (this.employee.id == null) {
    this._employeeService.addEmployee(this.employee).subscribe(
      (data: EmployeeModel) => {
        console.log(data);
        this.createEmployeeForm.reset();
        this._route.navigate(['list']);
      }, (error: any) => console.log(error)
    );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          console.log('updated Employee');
          this.createEmployeeForm.reset();
          this._route.navigate(['list']);
        }, (error: any) => console.log(error)
      );
    }
  }

  toggleShowPreview() {
    this.showPreview = !this.showPreview;
  }
}
