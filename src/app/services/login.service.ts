import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';

import { Login } from '../models/Login';
import { CookieService } from 'ngx-cookie-service';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/text' }),
  
  
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  postsUrl: string = 'http://localhost:8080/tuition-reimbursement/Login'
  constructor(private http: HttpClient, private cookie: CookieService) { }

  authUser(user: Login): Observable<Login>{
    return this.http.post<Login>(this.postsUrl, JSON.stringify(user),httpOptions)
  };

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
