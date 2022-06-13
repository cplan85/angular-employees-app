import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-characteristics-employee',
  templateUrl: './characteristics-employee.component.html',
  styleUrls: ['./characteristics-employee.component.css'],
})
export class CharacteristicsEmployeeComponent implements OnInit {
  @Output() employeeDetails = new EventEmitter<string>();
  addCharacteristic(value: string) {
    this.employeeDetails.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
