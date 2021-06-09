import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeItemComponent } from './employee/employee-item/employee-item.component';
import {EmployeeService} from "./services/employee-service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {DepartmentService} from "./services/department-service";
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeItemComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    EmployeeService,
    DepartmentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
