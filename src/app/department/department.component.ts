import { Component, OnInit } from '@angular/core';
import {DepartmentService} from "../services/department-service";
import {Department} from "../models/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departmentList: Department[] = [];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getAll();
  }


  public getAll(): void{
    this.departmentService.getAll().subscribe(
      response=>this.departmentList = response,
      ex=>console.log(ex)
    );
  }


}
