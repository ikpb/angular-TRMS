import { Component, OnInit } from '@angular/core';
import { ReimbursementForm } from '../../models/ReimbursementForm'
import { ReimbursementService } from '../../services/reimbursement.service'



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

dateLimit = this.currentDate.setDate(this.currentDate.getDate()+7);


  constructor(private reimbursementService: ReimbursementService) { }

  ngOnInit(): void {
  }
addForm(userid,dateOfEvent,address,city,state,cost,gradeFormat,typeOfEvent,workJustification,submissionDate,description, endDate){
this.reimbursementService.saveForm({userid,dateOfEvent,address,city,state,cost,gradeFormat,typeOfEvent,workJustification,submissionDate,description, endDate} as ReimbursementForm).subscribe(forms => {
  console.log(forms);
});
}
}
