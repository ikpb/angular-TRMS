import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
//properties
employee: Employee;

  constructor() { 
 
 }

  

  ngOnInit(): void {


}
}
