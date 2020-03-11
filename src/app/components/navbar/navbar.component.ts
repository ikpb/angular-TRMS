import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
authUser: boolean = false;
  constructor(private authService: LoginService) { }

  ngOnInit(): void {
    if(this.authService.loggedIn()){
      let b = localStorage.getItem('token').split(" ")[3];
      if(b.startsWith("DHEAD") || b.startsWith("DCHAIR") || b.startsWith("BENCO") ){
        this.authUser = true;
      }else{
        authUser: false;
      }
      
    }
    
  }

}
