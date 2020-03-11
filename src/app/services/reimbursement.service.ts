import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { ReimbursementForm } from '../models/ReimbursementForm'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {
  allFormsUrl: string = 'http://localhost:8080/tuition-reimbursement/Reimbursements';
  userFormsUrl: string = 'http://localhost:8080/tuition-reimbursement/Reimbursement';
  singleFormsUrl: string = 'http://localhost:8080/tuition-reimbursement/Reimbursement/id';
  constructor(private http: HttpClient) { }

getForms() : Observable<ReimbursementForm[]>{
  return this.http.get<ReimbursementForm[]>(this.allFormsUrl);
}

saveForm(forms: ReimbursementForm): Observable<ReimbursementForm>{
  return this.http.post<ReimbursementForm>(this.allFormsUrl, forms,httpOptions);
}
getMyForms(email: String) : Observable<ReimbursementForm[]>
{
  return this.http.get<ReimbursementForm[]>(`${this.userFormsUrl}?userid=${email}`,httpOptions);
}
getMyForm(id: Number) : Observable<ReimbursementForm>
{
  return this.http.get<ReimbursementForm>(`${this.singleFormsUrl}?id=${id}`,httpOptions);
}
}
