import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterComponent } from '../../component/register/register.component';

@Component({
  selector: 'app-register-user-dialog',
  templateUrl: './register-user-dialog.component.html',
  styleUrls: ['./register-user-dialog.component.css']
})
export class RegisterUserDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegisterComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
