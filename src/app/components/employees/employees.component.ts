import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
//import { EmployeeService } from '../../services/employees.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor() { }

  ngOnInit(): void {


  }


}
