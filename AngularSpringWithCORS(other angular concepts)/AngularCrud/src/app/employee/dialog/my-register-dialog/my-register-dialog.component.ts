import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../../component/register/register.component';

@Component({
  selector: 'app-my-register-dialog',
  templateUrl: './my-register-dialog.component.html',
  styleUrls: ['./my-register-dialog.component.css']
})
export class MyRegisterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onClickNo() {
    console.log('clicked No');
  }

  onClickYes() {
    console.log('clicked yes');
  }

}
