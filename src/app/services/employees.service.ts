import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { Employee } from '../models/Employee';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
 postsUrl: string = 'http://localhost:8080/tuition-reimbursement/User';
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.postsUrl);
  }
}
