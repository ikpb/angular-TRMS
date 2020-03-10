import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterForm} from 'src/app/models/RegisterForm';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private register: RegisterService, private router: Router) { }

  ngOnInit(){
  }
  
  addEmployee(firstName, lastName, email, password,title){
    this.register.saveEmployee({firstName, lastName, email, password,title} as RegisterForm).subscribe(forms =>{
    console.log(forms);
  });
  this.router.navigate(['/Login'])
}


}
