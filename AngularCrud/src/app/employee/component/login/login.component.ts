import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  // FormBuilder example
  // loginForm: FormGroup;
  // constructor(private formBuilder: FormBuilder) { }
  // ngOnInit() {
  //   this.loginForm = this.formBuilder.group({
  //     userName: [''],
  //     password: [''],
  //   });
  // }
  // onSubmitLogin() {
  //   console.log('LOGIN Form Submitted=> username: ' + this.loginForm.value);
  // }

  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit() { }

  onSubmitLogin() {
    console.log('LOGIN Form Submitted=> username: ' + this.loginForm.value);
  }

}

