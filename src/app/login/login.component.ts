import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  message:string;
  constructor( private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    if(this.username == 'admin' && this.password=='123'){
      this.authService.login();
      this.router.navigate(['/']);
    }else{
      this.message="Username or password is not correct";
      this.username="";
      this.password="";
    }
  }

}
