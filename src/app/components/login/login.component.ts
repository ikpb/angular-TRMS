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
        setTimeout(() => {
          this.getBy(this.by); 
        }, 1500);
       
      }
      
    });
     }
getBy(by){
  console.log(by);
  localStorage.setItem('token',by.sessionid +" "+ by.firstName+ " " + by.email+" " + by.userType);
  if(by.userType == "EMPLOYEE" || by.userType == "DHEAD" || by.userType == "DCHAIR" || by.userType == "BENCO"){
    this.router.navigate(['/employee-dashboard'])
  }else{
    this.router.navigate(['/login']);
  }
  
}
}
