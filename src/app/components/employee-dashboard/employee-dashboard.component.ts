import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service'

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})

export class EmployeeDashboardComponent implements OnInit {
employee: Employee;
authUser: boolean = false;
  constructor(private employeesService: EmployeesService) { }

  ngOnInit(): void {

    this.employeesService.getEmployee().subscribe(employ => {
    this.employee = employ;
      console.log(employ);
      localStorage.setItem('userId',this.employee.title)
      if(this.employee.userType.startsWith("DHEAD") || this.employee.userType.startsWith("DCHAIR") || this.employee.userType.startsWith("BENCO")){
        this.authUser = true;
      }
      
  });

}
}