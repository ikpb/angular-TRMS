import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { ApproveRejectForm } from '../models/ApproveRejectForm';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApproveRejectService {
  allFormsUrl: string = 'http://localhost:8080/tuition-reimbursement/Approve-Reject';
  singleFormsUrl: string = 'http://localhost:8080/tuition-reimbursement/Approve-Reject/Id';
  allApprovedFormsUrl: string = 'http://localhost:8080/tuition-reimbursement/Approved';

  constructor(private http: HttpClient) { }

  getForms() : Observable<ApproveRejectForm[]>{
    return this.http.get<ApproveRejectForm[]>(this.allFormsUrl);
  }
  getFormsByFormId(formid: number) : Observable<ApproveRejectForm[]>{
    return this.http.get<ApproveRejectForm[]>(this.singleFormsUrl+"?formid="+formid);
  }
  getAllApprovedForm(userid: string) : Observable<ApproveRejectForm[]>{
    return this.http.get<ApproveRejectForm[]>(this.allApprovedFormsUrl+"?userid="+userid);
  }
  saveForm(form: ApproveRejectForm):Observable<ApproveRejectForm>{
    return this.http.post<ApproveRejectForm>(this.allFormsUrl,form,httpOptions);

}
}
