import { Employee } from './employee.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'List of Employees';

  employees: Employee[] = [
    new Employee('John', 'Wick', 'assassin', 7500),
    new Employee('John', 'Lopez', 'diver', 8500),
    new Employee('Laura', 'Mendez', 'swimmer', 10500),
    new Employee('John', 'Wick', 'assassin', 7500),
  ];

  cuadroName:string="";
cuadroSurname:string="";
cuadroPosition:string="";
cuadroSalary:number=0;


  addEmployee(): void {
    this.employees.push(new Employee('John', 'Wick', 'assassin', 7500));
  }
}
