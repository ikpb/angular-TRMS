import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';
import { ReimbursementService } from '../../services/reimbursement.service';
import { ReimbursementForm } from '../../models/ReimbursementForm'
//
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-reimbursements',
  templateUrl: './employee-reimbursements.component.html',
  styleUrls: ['./employee-reimbursements.component.css']
})

export class EmployeeReimbursementsComponent implements OnInit {
  employee: Employee;
  myform: ReimbursementForm[];
  loadForm: boolean=false;
  noForms:boolean = false;

  constructor(
    private employeesService: EmployeesService,
    private reimbursementService: ReimbursementService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.employeesService.getEmployee().subscribe(employ => {
      this.employee = employ;
    });
    setTimeout(() => {
      this.reimbursementService.getMyForms(this.employee?.email).subscribe(form=>{
        this.myform = form;
        console.log(this.employee);
        console.log(this.myform);
        if(this.myform.length==0){
          this.noForms=true;
          this.loadForm = true;
        }else{
          this.loadForm = true;
        }
        
      });
    }, 2500);
}
onSelect(myform){
this.router.navigate(['/my-reimbursements',myform.id]);
}
}