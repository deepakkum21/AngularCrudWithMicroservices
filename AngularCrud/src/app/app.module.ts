import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal--validator.directive';
import { DisplayEmployeeComponent } from './employee/display-employee/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employee/service/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeFilterPipe } from './employee/custom-pipe/employee-filter.pipe';
import { EmployeeListResolverService } from './employee/service/employee-list-resolver.service';
import { EmployeeNotFoundComponent } from './employee/employee-not-found/employee-not-found.component';
import { EmployeeDetailsGuardService } from './employee/service/employee-details-guard.service';
import { EmployeeContentProjectionComponent } from './employee/shared/employee-content-projection.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { RegisterComponent } from './employee/component/register/register.component';
import { LoginComponent } from './employee/component/login/login.component';
import { MyRegisterDialogComponent } from './employee/dialog/my-register-dialog/my-register-dialog.component';
import { DeleteDialogComponent } from './employee/dialog/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './employee/dialog/edit-dialog/edit-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const appRoutes: Routes = [
  {
    path: 'list',
    component: ListEmployeesComponent,
    resolve: { employeeList: EmployeeListResolverService }
  },
  {
    path: 'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService]
  },
  {
    path: 'employee/:id',
    component: EmployeeDetailsComponent,
    canActivate: [EmployeeDetailsGuardService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'notfound', component: EmployeeNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe,
    EmployeeNotFoundComponent,
    EmployeeContentProjectionComponent,
    RegisterComponent,
    LoginComponent,
    MyRegisterDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    // setting enableTracing  True logs all the events that take place when routing take place
    // like NavigationStart, NavigationEnd, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, NavigationCancel, NavigationError,
    //  ChildActivationStart,ChildActivationEnd,ActivationStart,ActivationEnd,ResolveStart.ResolveEnd
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [MaterialModule],
  providers: [],
  entryComponents: [
    MyRegisterDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

