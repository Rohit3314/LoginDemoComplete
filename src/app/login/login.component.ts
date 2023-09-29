import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message: any;

  constructor(private s1:DemoService, private router:Router)
   { }

  ngOnInit(): void {
  }
    doLogin()
    {
      let resp = this.s1.login(this.username,this.password);
      resp.subscribe((data: any)=>{
       this.message = data;
       this.router.navigate(["/home"]);
      });
    }


}
