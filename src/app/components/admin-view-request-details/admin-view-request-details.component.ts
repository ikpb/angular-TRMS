import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReimbursementService } from '../../services/reimbursement.service';
import { ReimbursementForm } from '../../models/ReimbursementForm'

@Component({
  selector: 'app-admin-view-request-details',
  templateUrl: './admin-view-request-details.component.html',
  styleUrls: ['./admin-view-request-details.component.css']
})
export class AdminViewRequestDetailsComponent implements OnInit {
  public formId;
  individualForm: ReimbursementForm;
  pageLoaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private reimbursementService: ReimbursementService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
this.formId = id;

setTimeout(() => {
  
 let tokenValue = localStorage.getItem("userId");

  let values1 = parseInt(this.formId);
  let values2 = parseInt(tokenValue.toString());
  console.log(this.formId);
  console.log(tokenValue);
  this.reimbursementService.getMyEmployeesForm(values2,values1).subscribe(form=>{
    this.individualForm = form;

    console.log(this.individualForm);
    this.pageLoaded = true;
  });
}, 2000);


}

}
