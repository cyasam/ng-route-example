import { EmployeePageModule } from './employee-page.module';

describe('EmployeePageModule', () => {
  let employeePageModule: EmployeePageModule;

  beforeEach(() => {
    employeePageModule = new EmployeePageModule();
  });

  it('should create an instance', () => {
    expect(employeePageModule).toBeTruthy();
  });
});
