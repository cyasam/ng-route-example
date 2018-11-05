import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

import { EmployeeModel } from '../../model/employee.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employee: EmployeeModel;
  id: number;
  loading: boolean = true;
  saving: boolean = false;

  employeeForm: FormGroup;
  message: string;
  private routeSub: any;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    this.employeeService.getEmployee(this.id).subscribe(result => {
      this.employee = result;
      this.employeeForm = this.fb.group({
        name: [this.employee.name, [Validators.required, Validators.minLength ]],
        title: [this.employee.title, [Validators.required, Validators.minLength ]],
        department: [this.employee.department, [Validators.required, Validators.minLength ]]
      })

      this.loading = false;
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  handleSubmit() {
    this.message = '';
    console.log(this.employeeForm.controls.name.errors)
    if(this.employeeForm.invalid) {
      return;
    }

    this.saving = true;
    const formValue = this.employeeForm.value;
    this.employeeService.updateEmployee(this.id, formValue).subscribe(
      () => {
        this.saving = false;
        this.message = 'Ok';
      }
    )
  }

}
