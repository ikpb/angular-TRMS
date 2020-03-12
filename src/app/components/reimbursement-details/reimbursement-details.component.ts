import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReimbursementService } from '../../services/reimbursement.service';
import { ReimbursementForm } from '../../models/ReimbursementForm'

@Component({
  selector: 'app-reimbursement-details',
  templateUrl: './reimbursement-details.component.html',
  styleUrls: ['./reimbursement-details.component.css']
})
export class ReimbursementDetailsComponent implements OnInit {
public formId;
individualForm: ReimbursementForm;
pageLoaded: boolean = false;

  constructor(private route: ActivatedRoute,
    private reimbursementService: ReimbursementService
    ) { }
 
  ngOnInit(): void {
  let id = parseInt(this.route.snapshot.paramMap.get('id'));
this.formId = id;

setTimeout(() => {
  this.reimbursementService.getMyForm(this.formId).subscribe(form=>{
    this.individualForm = form;

    console.log(this.individualForm);
    this.pageLoaded = true;
  });
}, 2000);
  }

}
