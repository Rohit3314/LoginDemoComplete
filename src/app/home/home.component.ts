import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  constructor(private s1: DemoService) 
  { }

  ngOnInit(): void {
    let resp = this.s1.getuserdetail();
    resp.subscribe(data=> this.users=data);
  }
 
}
