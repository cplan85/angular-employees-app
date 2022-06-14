import { EmployeesServiceService } from './employees-service.service';
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {
  constructor(private alertWindowService: EmployeesServiceService) {}
  employees: Employee[] = [
    new Employee('John', 'Wick', 'assassin', 7500),
    new Employee('John', 'Lopez', 'diver', 8500),
    new Employee('Laura', 'Mendez', 'swimmer', 10500),
    new Employee('John', 'Wick', 'assassin', 7500),
  ];

  addEmployeeService(employee: Employee) {
    this.alertWindowService.showMessage(
      `Person to add: ${employee.name} ${employee.surname} and Salary: ${employee.salary}`
    );
    this.employees.push(employee);
  }
}
