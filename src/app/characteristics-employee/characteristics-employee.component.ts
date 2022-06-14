import { EmployeesServiceService } from './../employees-service.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characteristics-employee',
  templateUrl: './characteristics-employee.component.html',
  styleUrls: ['./characteristics-employee.component.css'],
})
export class CharacteristicsEmployeeComponent implements OnInit {
  //MAKE SURE EMPLOYEEDETAILS GETS CARRIED OVER TO PARENT COMPONENT HTML.
  @Output() employeeDetails = new EventEmitter<string>();

  addChildItem(value: string) {
    this.employeeDetails.emit(value);
    this.myService.showMessage(`New Characteristic to add: ${value} `)

  }
// a service is lke a shared function among different components
  constructor(private myService: EmployeesServiceService ) {}

  ngOnInit(): void {}
}
