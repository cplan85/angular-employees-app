import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characteristics-employee',
  templateUrl: './characteristics-employee.component.html',
  styleUrls: ['./characteristics-employee.component.css'],
})
export class CharacteristicsEmployeeComponent implements OnInit {
  //MAKE SURE EMPLOYEEDETAILS GETS CARRIED OVER.
  @Output() employeeDetails = new EventEmitter<string>();

  addChildItem(value: string) {
    this.employeeDetails.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
