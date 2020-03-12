import { Component, OnInit } from '@angular/core';
import { ApproveRejectForm } from '../../models/ApproveRejectForm';
import { ApproveRejectService } from '../../services/approve-reject.service';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
@Component({
  selector: 'app-my-approved-rejected',
  templateUrl: './my-approved-rejected.component.html',
  styleUrls: ['./my-approved-rejected.component.css']
})
export class MyApprovedRejectedComponent implements OnInit {
  employee: Employee;
  appRejectForms: ApproveRejectForm[];
  constructor(private employeesService: EmployeesService,
    private approveRejectService: ApproveRejectService,) { }

  ngOnInit(): void {
    this.employeesService.getEmployee().subscribe(employ => {
      this.employee = employ;
    });

  }

}
