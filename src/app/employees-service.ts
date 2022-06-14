import { Employee } from "./employee.model";

export class EmployeesService {

    employees: Employee[] = [
        new Employee('John', 'Wick', 'assassin', 7500),
        new Employee('John', 'Lopez', 'diver', 8500),
        new Employee('Laura', 'Mendez', 'swimmer', 10500),
        new Employee('John', 'Wick', 'assassin', 7500),
      ];

      addEmployeeService(employee: Employee) {
   
        this.employees.push(employee);
      }
    


}