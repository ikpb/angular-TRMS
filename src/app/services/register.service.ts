import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { RegisterForm } from '../models/RegisterForm';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  postsUrl: string = 'http://localhost:8080/tuition-reimbursement/User';

  constructor(private http: HttpClient) { }

  getForms() : Observable<RegisterForm[]>{
    return this.http.get<RegisterForm[]>(this.postsUrl);
  }
  
saveEmployee(forms: RegisterForm): Observable<RegisterForm>{
  return this.http.post<RegisterForm>(this.postsUrl, forms,httpOptions);
}
}
