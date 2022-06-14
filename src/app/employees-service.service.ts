import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  constructor() { }

  showMessage(message: string) {
    alert(message)
  }
}
