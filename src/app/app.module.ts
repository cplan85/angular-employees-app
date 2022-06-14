import { EmployeesServiceService } from './employees-service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeChildComponent } from './employee-child/employee-child.component';
import { CharacteristicsEmployeeComponent } from './characteristics-employee/characteristics-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeChildComponent,
    CharacteristicsEmployeeComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EmployeesServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
