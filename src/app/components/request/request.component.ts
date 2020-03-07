import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../services/reimbursement.service'

import { ReimbursementForm } from '../../models/ReimbursementForm'
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService) { }
  forms: ReimbursementForm[];
  ngOnInit(): void {
    this.reimbursementService.getForms().subscribe(forms =>{
     this.forms = forms;
    });
  }

}
