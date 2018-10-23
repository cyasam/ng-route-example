import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeePageComponent } from './employee-page.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';

const employeeRoutes = [
  {
    path: '',
    component: EmployeePageComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent,
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: EmployeeComponent
      },
      {
        path: 'new',
        component: EmployeeNewComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(employeeRoutes)
  ],
  declarations: [ EmployeePageComponent, EmployeeListComponent, EmployeeComponent, EmployeeNewComponent ]
})
export class EmployeePageModule { }
