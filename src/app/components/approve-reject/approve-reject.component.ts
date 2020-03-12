import { Component, OnInit } from '@angular/core';
import { ApproveRejectForm } from '../../models/ApproveRejectForm';
import { ApproveRejectService } from '../../services/approve-reject.service';
import { ReimbursementForm } from '../../models/ReimbursementForm'
import { Employee } from '../../models/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-approve-reject',
  templateUrl: './approve-reject.component.html',
  styleUrls: ['./approve-reject.component.css']
})
export class ApproveRejectComponent implements OnInit {
  employee: Employee;
  appRejectForm: ApproveRejectForm;
  appRejectForms: ApproveRejectForm[];
  infoNeeded ="";
  showLog=false;
  myform: ReimbursementForm;
  loadForm: boolean=false;
  noForms:boolean = false;
  formApproved = false;
  rejectPress: boolean = false;
  constructor(
    private employeesService: EmployeesService,
    private approveRejectService: ApproveRejectService,

  ) { }
  ngOnInit(): void {
    this.employeesService.getEmployee().subscribe(employ => {
      this.employee = employ;
    });
    setTimeout(() => {
    this.approveRejectService.getFormsByFormId(parseInt(localStorage.getItem('currentRequest'))).subscribe(forms =>{
      this.appRejectForms = forms;
      console.log(this.appRejectForms);
      if(this.appRejectForms.length==0){
        this.noForms=true;
        this.loadForm = true;
      }else{
        this.loadForm = true;
      }
    });
  }, 2500);
  }

  areYouSure(e){
this.rejectPress=true;
e.preventDefault();
  }
  submitRejection(e){
   let userId = parseInt(localStorage.getItem('userId'));
    let formId = parseInt(localStorage.getItem('currentRequest'));
    let today = new Date();
    let leng = this.appRejectForms.length;
    for(let i=0;i<leng;i++){
      let apby = Number(this.appRejectForms[i].approvedby);
      let rgby = Number(this.appRejectForms[i].rejectedby);
      if(apby==userId || rgby==userId){
        console.log("user has already submitted a form")
        alert(`You have already approved this form`);
        break;
      }else{
    this.approveRejectService.saveForm({appid:0,formid:formId,approvedby:0,timeAppReject:today,rejected:true,rejectedby:userId,infoNeeded: this.infoNeeded} as ApproveRejectForm).subscribe(forms =>{
      console.log(forms);
  })
      }

    }
    

  e.preventDefault();
}
submitApproval(e){
  let userId = parseInt(localStorage.getItem('userId'));
   let formId = parseInt(localStorage.getItem('currentRequest'));
   let today = new Date();
   let leng = this.appRejectForms.length;
   console.log(leng);
   for(let i=0;i<leng;i++){
     let apby = Number(this.appRejectForms[i].approvedby);
     let rgby = Number(this.appRejectForms[i].rejectedby);
     if(apby==userId){

 console.log("user has already submitted a form")
 alert(`You have already approved this form`);
 break;
     }else{
          this.approveRejectService.saveForm({appid:0,formid:formId,approvedby:userId,timeAppReject:today,rejected:false,rejectedby:0,infoNeeded: "None at this time."} as ApproveRejectForm).subscribe(forms =>{
     console.log(forms);
  
 })
     }  
   }
 e.preventDefault();
}
getInfo(e){
this.infoNeeded = (e.target as HTMLInputElement).value;
}
toggleLog(e){
 this.showLog = !this.showLog;
  e.preventDefault();

}
}
