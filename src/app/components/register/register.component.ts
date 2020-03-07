import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


employee: Employee ={
firstName:'',
lastName: '',
email: '',
password: '',
title:'',
}
  constructor(private register: RegisterService) { }

  ngOnInit(): void {
  }
  
  addEmployee(){this.register.saveEmployee({} as Employee).subscribe(forms =>{
    console.log(forms);
  });
}


}
