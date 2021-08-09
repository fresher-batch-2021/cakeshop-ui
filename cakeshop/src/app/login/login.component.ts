import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
 

  constructor() { }

  ngOnInit(): void {
  }
  LoginEmail:string="";
  LoginPassword:string="";
 
  Login()
  {
    if(this.LoginEmail == "")
    {
      alert("email cant be blank");
    }
    else
    {
      alert("successfully logged in");
    }
  }

}
