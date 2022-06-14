import { EmployeesServiceService } from './employees-service.service';
import { Employee } from './employee.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'List of Employees';

  constructor(private myService: EmployeesServiceService) {

  }

  employees: Employee[] = [
    new Employee('John', 'Wick', 'assassin', 7500),
    new Employee('John', 'Lopez', 'diver', 8500),
    new Employee('Laura', 'Mendez', 'swimmer', 10500),
    new Employee('John', 'Wick', 'assassin', 7500),
  ];

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
    this.employees.push(myEmployee);
    this.myService.showMessage(`Name of Employee: ${myEmployee.name} ${myEmployee.surname} created`)
  }

  nameBox: string = '';
  surnameBox: string = '';
  positionBox: string = '';
  salaryBox: number = 0;

  // addEmployee(): void {
  //   this.employees.push(new Employee('John', 'Wick', 'assassin', 7500));
  // }
}
