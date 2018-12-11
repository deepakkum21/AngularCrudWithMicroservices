import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { EmployeeRoutingModule } from './/employee-routing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    EmployeeRoutingModule
  ],
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent]
})
export class EmployeeModule { }
