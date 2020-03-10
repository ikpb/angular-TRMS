import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Employee } from '../models/Employee';
import { ReimbursementForm } from '../models/ReimbursementForm';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee: Employee;
  employeeDoc: ReimbursementForm;

  constructor() { }
}
