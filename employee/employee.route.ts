import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { Routes } from '@angular/router';

export const EMPLOYEE_ROUTE: Routes = [
    {
        path: 'register',
        component: RegisterEmployeeComponent,
        data: {
            authorities: [],
            pageTitle: 'home.title'
        }
    }];
