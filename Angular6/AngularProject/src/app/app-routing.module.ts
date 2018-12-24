import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'employees',
    loadChildren: './Employee/employee.module#EmployeeModule'
  },
  // wild card (**) route should be always at last
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        // For eager lazy module i.e. preloading module
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
