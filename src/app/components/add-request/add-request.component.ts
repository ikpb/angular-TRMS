import { Component, OnInit } from '@angular/core';
import { ReimbursementForm } from '../../models/ReimbursementForm';
import { ReimbursementService } from '../../services/reimbursement.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
//properties
reimbursementForm: ReimbursementForm;
nowDate = new Date();
currentDate = new Date();
estimatedReimbursement: number;

dateLimit = this.currentDate.setDate(this.currentDate.getDate()+7);


  constructor(
    private reimbursementService: ReimbursementService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
addForm(userid,dateOfEvent,address,city,state,cost,gradeFormat,typeOfEvent,workJustification,submissionDate,description, endDate){
this.reimbursementService.saveForm({userid,dateOfEvent,address,city,state,cost,gradeFormat,typeOfEvent,workJustification,submissionDate,description, endDate} as ReimbursementForm).subscribe(forms => {
  console.log(forms);
});
this.router.navigate(['/employee-dashboard']);
}

calculateResults(e,val){
let courseCost= e.target.value;
console.log(e.target.value);
console.log(val);
switch(val) {
  case 1:
    this.estimatedReimbursement = courseCost*.8;
    
    break;
  case 2:
    this.estimatedReimbursement = courseCost*.6;
    
    break;
  case 3:
    this.estimatedReimbursement = courseCost*.75;
   
    break;
  case 4:
    this.estimatedReimbursement = courseCost*1;
    
    break;
  case 5:
    this.estimatedReimbursement = courseCost*.9;
    
    break;
  case 6:
    this.estimatedReimbursement = courseCost*.3;
    
    break;
  }
}
}
