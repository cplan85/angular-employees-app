import { EmployeesServiceService } from './employees-service.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeChildComponent } from './employee-child/employee-child.component';
import { CharacteristicsEmployeeComponent } from './characteristics-employee/characteristics-employee.component';
import { EmployeesService } from './employees-service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
// for reactive forms here and include in imports 
import { ReactiveFormsModule } from '@angular/forms';
import { ViewChildComponent } from './view-child/view-child.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeChildComponent,
    CharacteristicsEmployeeComponent,
    HomeComponentComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    BasicFormComponent,
    ViewChildComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule],
  providers: [EmployeesServiceService, EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
