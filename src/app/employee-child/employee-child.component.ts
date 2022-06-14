import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-child',
  templateUrl: './employee-child.component.html',
  styleUrls: ['./employee-child.component.css'],
})
export class EmployeeChildComponent implements OnInit {
  @Input() employeeInChild: Employee;
  @Input() employeeIndex: number;

  traitsArr = [''];

  addItem(newCharacteristic: string) {
    this.traitsArr.push(newCharacteristic);
    console.log('add Item in Parent', this.traitsArr);
  }

  constructor() {}

  ngOnInit(): void {}
}
