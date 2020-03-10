import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {
this.employeesService.getEmployees().subscribe(list => {
  this.employees = list;
});

  }


}
