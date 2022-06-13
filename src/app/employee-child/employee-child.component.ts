import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css'],
})
export class EmployeeChildComponent implements OnInit {
  @Input() employeeInChild: Employee;
  @Input() employeeIndex: number;

  characteristicsArr = [''];

  addCharacteristic(newCharacteristic: any) {
    this.characteristicsArr.push(newCharacteristic);
  }

  constructor() {}

  ngOnInit(): void {}
}
