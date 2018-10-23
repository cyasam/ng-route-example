import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeModel[];
  loading: boolean = true;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getList().subscribe(result => {
      this.employees = result;
      this.loading = false;
    })
  }

}
