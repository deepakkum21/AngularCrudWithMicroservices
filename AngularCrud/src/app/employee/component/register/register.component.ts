import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MyRegisterDialogComponent } from '../../dialog/my-register-dialog/my-register-dialog.component';
import { ConfirmPasswordValidator } from '../../validator/confirm-password-validator';
import { UserInfoModel } from '../../../models/user-info-model';
import { UserinfoService } from '../../service/userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  IsAccepted = 0;
  isConfirmed: false;
  userInfo: UserInfoModel = {
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    email: '',
    password: ''
  };

  // using FormGroup and FormControl
  @ViewChild('registerForm')
  newRegisterForm: FormGroup;

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

  constructor(private myDialog: MatDialog, private confirmationSnackBar: MatSnackBar, private userInfoService: UserinfoService,
    private _route: Router) {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,
      Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
      middleName: new FormControl(this.userInfo.middleName, [Validators.minLength(4), Validators.maxLength(15),
         Validators.pattern('[a-zA-Z\s]+$')]),
      lastName: new FormControl(this.userInfo.lastName, [Validators.required,
      Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
      address: new FormGroup({
        street: new FormControl(this.userInfo.street),
        city: new FormControl(this.userInfo.city, [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
        state: new FormControl(this.userInfo.state, [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]+$')]),
        zipcode: new FormControl(this.userInfo.zipCode, [Validators.required,
        Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]{6}$')])
      }),
      userName: new FormControl(this.userInfo.userName, [Validators.required,
      Validators.minLength(4), Validators.maxLength(15), Validators.pattern('[0-9a-zA-Z\s]+$')]),
      email: new FormControl(this.userInfo.email, [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')]),
      passwordGroup: new FormGroup({
        password: new FormControl(this.userInfo.password, [Validators.required,
        Validators.minLength(8), Validators.maxLength(15)]),
        confirmPassword: new FormControl('', [Validators.required])

      }, ConfirmPasswordValidator),
      IsAccepted: new FormControl('')
    });
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.registerForm.controls['firstName'].setValue(this.userInfo === null || this.userInfo === undefined
      || this.userInfo.firstName === null || this.userInfo.firstName === undefined ? '' : this.userInfo.firstName);
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
    console.log(this.userInfo.firstName + this.userInfo.lastName + this.userInfo.middleName + this.userInfo.userName);
    this.userInfoService.addUserInfo(this.userInfo).subscribe(
      (result: UserInfoModel) => {
        console.log(result);
        this.registerForm.reset();
        this._route.navigate(['login']);
        this.openSnackBarConfirmaton();
      }, (error: any) => console.log(error)
    );
  }

  onChange(event: any) {
    if (event.checked === true) {
      this.IsAccepted = 1;
    } else {
      this.IsAccepted = 0;
    }
  }

  openSnackBarConfirmaton() {
    this.confirmationSnackBar.open('User registered successfully', 'Ok!');
  }
}
