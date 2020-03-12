import { Component, OnInit } from '@angular/core';
import { ApproveRejectForm } from '../../models/ApproveRejectForm';
import { ApproveRejectService } from '../../services/approve-reject.service';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-approved',
  templateUrl: './my-approved.component.html',
  styleUrls: ['./my-approved.component.css']
})
export class MyApprovedComponent implements OnInit {
  loadForm: boolean=false;
  noForms:boolean = false;
  employee: Employee;
  appRejectForms: ApproveRejectForm[];
  constructor(
    private employeesService: EmployeesService,
    private approveRejectService: ApproveRejectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeesService.getEmployee().subscribe(employ => {
      this.employee = employ;
    });
setTimeout(() => {
  this.approveRejectService.getAllApprovedForm(this.employee.email).subscribe(forms =>{
      this.appRejectForms = forms;
      console.log(this.appRejectForms);
      this.loadForm=true;
    });
}, 2000);
    

  }
  onSelect(appRejectForms){
    this.router.navigate(['/my-reimbursements',appRejectForms.formId]);
    }

}
