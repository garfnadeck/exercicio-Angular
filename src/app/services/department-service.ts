import {Injectable} from "@angular/core";
import {HttpClient, HttpUserEvent} from "@angular/common/http";
import {from, Observable} from "rxjs";
import {Department} from "../models/department";
import {catchError, tap} from "rxjs/operators";



@Injectable()
export class DepartmentService{
  urlBase = 'http://127.0.0.1:8000/api/sale/core';

  constructor(private http: HttpClient) {

  }


  public getAll(): Observable<Department[]>{
    return this.http.get(`${this.urlBase}/department/`).pipe(
      tap(response => response as HttpUserEvent<Department[]>),
      catchError(ex=> from([]))
    );
  }

  // public save(): Observable<Department>{
  //   return this.http.post(`${this.urlBase}/department/`, {}).pipe(
  //     tap(response => response as HttpUserEvent<Department>),
  //     catchError(ex=> from([]))
  //   );
  // }
}


