import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IEmployee } from '../iemployee';

@Component({
  selector: 'jhi-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  employee: IEmployee;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // using formBuilder
    this.employeeForm = this._formBuilder.group({
      firstName: ['', [ Validators.minLength(2), Validators.maxLength(15)]],
      middleName: new FormControl(),
      lastName: new FormControl()
    });
    // this.employeeForm = new FormGroup({
    //   firstName: new FormControl(),
    //   middleName: new FormControl(),
    //   lastName: new FormControl()
    // });
  }

  onSubmitClick() {
    console.log('submit button clicked');
  }

}
