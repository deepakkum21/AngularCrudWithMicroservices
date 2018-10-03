import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MyRegisterDialogComponent } from '../../dialog/my-register-dialog/my-register-dialog.component';
import { ConfirmPasswordValidator } from '../../vaildator/confirm-password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  IsAccepted = 0;
  isConfirmed: false;
  firstName: string;
  middleName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipcode: number;
  userName: string;
  email: string;
  password: string;

  // using FormGroup and FormControl
  registerForm: FormGroup;

  // using FormBuilder
  // registerFrom = this._registerFormBuilder.group({
  //   firstName: ['', Validators.required, Validators],
  //   lastName: [''],
  //   address: this._registerFormBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zipcode: ['']
  //   }),
  //   userName: [''],
  //   password: [''],
  //   confirmPassword: ['']
  // });

  // constructor(private _registerFormBuilder: FormBuilder) { }

  constructor(private myDialog: MatDialog, private confirmationSnackBar: MatSnackBar) {
    this.registerForm = new FormGroup({
      firstName: new FormControl(this.firstName, [Validators.required,
      Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
      middleName: new FormControl(this.middleName, [Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
      lastName: new FormControl(this.lastName, [Validators.required,
      Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
      address: new FormGroup({
        street: new FormControl(this.street),
        city: new FormControl(this.city, [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
        state: new FormControl(this.state, [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
        zipcode: new FormControl(this.zipcode, [Validators.required,
        Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]{6}$')])
      }),
      userName: new FormControl(this.userName, [Validators.required,
      Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[0-9a-zA-Z\s]+$')]),
      email: new FormControl(this.email, [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required,
        Validators.minLength(8), Validators.maxLength(15)]),
        confirmPassword: new FormControl('', [Validators.required, ConfirmPasswordValidator])

      }),
      IsAccepted: new FormControl('')
    });

    this.registerForm.controls.password.valueChanges.subscribe(
      value => this.registerForm.controls.confirmPassword.updateValueAndValidity());
  }

  ngOnInit() {

  }

  onSubmitRegister(registerForm: NgForm) {
    const dialogRef = this.myDialog.open(MyRegisterDialogComponent, {
      width: '600px',
      data: 'you want to register'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('the result: ' + result);
      this.isConfirmed = result;
      if (result) {
        this.onClickYes(registerForm);
      }
    });
  }

  onClickYes(registerForm: NgForm) {
    console.log('now resdy to resiter the user');
    console.log(registerForm);
    this.openSnackBarConfirmaton();
  }

  onChange(event: any) {
    if (event.checked === true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  openSnackBarConfirmaton() {
    this.confirmationSnackBar.open(this.firstName + ' is registered successfully', 'Ok!');
  }
}
