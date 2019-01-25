import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EMPLOYEE_ROUTE } from 'app/employee/employee.route';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { MaterialModule } from 'app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [RouterModule.forChild(EMPLOYEE_ROUTE), MaterialModule, ReactiveFormsModule, FormsModule],
    declarations: [RegisterEmployeeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeModule { }
