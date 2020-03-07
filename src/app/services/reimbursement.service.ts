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
  postsUrl: string = 'http://localhost:8080/tuition-reimbursement/reimbursements';

  constructor(private http: HttpClient) { }

getForms() : Observable<ReimbursementForm[]>{
  return this.http.get<ReimbursementForm[]>(this.postsUrl);
}

saveForm(forms: ReimbursementForm): Observable<ReimbursementForm>{
  return this.http.post<ReimbursementForm>(this.postsUrl, forms,httpOptions);
}
}
