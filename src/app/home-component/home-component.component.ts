import { Component, OnInit } from '@angular/core';
import { EmployeesServiceService } from '../employees-service.service';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees-service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'List of Employees';
  employees: Employee[] = [];

  constructor(
    private myService: EmployeesServiceService,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.employees = this.employeeService.employees;
  }

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

    //this.myService.showMessage(`Name of Employee: ${myEmployee.name} ${myEmployee.surname} created`)

    this.employeeService.addEmployeeService(myEmployee);
  }

  nameBox: string = '';
  surnameBox: string = '';
  positionBox: string = '';
  salaryBox: number = 0;

}
