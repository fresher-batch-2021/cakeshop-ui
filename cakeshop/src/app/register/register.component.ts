import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string="";
  email:string="";
  phoneNumber:string="";
  password:string="";
  confirmPassword:string="";
  register()
  {
     alert("register button clicked");
  
 if(this.name =="" ) 
 {
  alert  
  }

}
}
