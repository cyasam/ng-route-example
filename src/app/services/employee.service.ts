import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { EmployeeModel } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getList(): Observable<EmployeeModel[]> {
    return this.http.get('http://localhost:3000/employees')
      .pipe(
        tap(
          (result: EmployeeModel[]) => result
        )
      )
  } 

  getEmployee(id: number): Observable<EmployeeModel> {
    return this.http.get(`http://localhost:3000/employees/${id}`)
      .pipe(
        tap(
          (result: EmployeeModel) => result
        )
      )
  }

  addEmployee(employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post(`http://localhost:3000/employees/`, employee)
      .pipe(
        tap(
          (result: EmployeeModel) => result
        )
      )
  }

  updateEmployee(id, employee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put(`http://localhost:3000/employees/${id}`, employee)
      .pipe(
        tap(
          (result: EmployeeModel) => result
        )
      )
  }
}
