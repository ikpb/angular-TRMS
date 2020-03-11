import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/Login';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private login: LoginService) { }
    by: {};
    employee:Employee;
  ngOnInit(): void {
    
  }

  logInUser(email, password){
    this.login.authUser({email,password} as Login).subscribe(user=>{
      this.by = user.toString().split(" ")
      .map(user => user.split(':'))
      .reduce((accumulator, [key, value]) =>
      ({ ...accumulator, [key.trim()]: decodeURIComponent(value)}),
      {})
      if(this.by===null){
      }else{
       this.getBy(this.by); 
      }
      
    });
     }
getBy(by){
  console.log(by);
  localStorage.setItem('token',by.sessionid +" "+ by.firstName+ " " + by.email+" " + by.userType);
  if(by.userType == "EMPLOYEE" || by.userType == "DHEAD" || by.userType == "DCHAIR" || by.userType == "BENCO"){
    this.router.navigate(['/employee-dashboard'])
    this.employee.firstName = by.firstName.toString;
    this.employee.lastName = by.lastName.toString;
    this.employee.id = Number(by.id);
    this.employee.email = by.email.toString;
  }else{
    this.router.navigate(['/dashboard']);
  }
  
}
}
