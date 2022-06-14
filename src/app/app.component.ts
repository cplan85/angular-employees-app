import { EmployeesServiceService } from './employees-service.service';
import { Employee } from './employee.model';
import { Component } from '@angular/core';
import { EmployeesService } from './employees-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'List of Employees';
  employees:Employee[]=[];

  constructor(private myService: EmployeesServiceService, private employeeService: EmployeesService) {

  }

  ngOnInit(): void {
    this.employees = this.employeeService.employees
  }
/*
  employees: Employee[] = [
    new Employee('John', 'Wick', 'assassin', 7500),
    new Employee('John', 'Lopez', 'diver', 8500),
    new Employee('Laura', 'Mendez', 'swimmer', 10500),
    new Employee('John', 'Wick', 'assassin', 7500),
  ];
*/


  traitsArr = [''];

  addItem(newCharacteristic: any) {
    this.traitsArr.push(newCharacteristic.value);
    console.log('add Item in Parent', this.traitsArr);
  }

  addEmployee() {
    let myEmployee = new Employee(
      this.nameBox,
      this.surnameBox,
      this.positionBox,
      this.salaryBox
    );
 
    this.myService.showMessage(`Name of Employee: ${myEmployee.name} ${myEmployee.surname} created`)

    this.employeeService.addEmployeeService(myEmployee)
  }

  nameBox: string = '';
  surnameBox: string = '';
  positionBox: string = '';
  salaryBox: number = 0;

  // addEmployee(): void {
  //   this.employees.push(new Employee('John', 'Wick', 'assassin', 7500));
  // }
}
