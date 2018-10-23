import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  newEmployeeForm: FormGroup;
  message: string;
  saving: boolean = false;

  constructor(private employeeService: EmployeeService, private fb: FormBuilder) { }

  ngOnInit() {
    this.newEmployeeForm = this.fb.group({
      name: [''],
      title: [''],
      department: ['']
    })
  }

  handleSubmit() {
    this.message = '';
    this.saving = true;
    const formValue = this.newEmployeeForm.value;
    this.employeeService.addEmployee(formValue).subscribe(
      () => {
        this.saving = false;
        this.message = 'Ok';
      }
    )
  }

}
