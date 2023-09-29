import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  
  constructor(private h1:HttpClient)
   { }

   login(username:string, password:string)
   {
    console.log(username);
    console.log(password);
      const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
      return this.h1.get("http://localhost:9001/",{headers,responseType:'text'as 'json' });
   }

    public getuserdetail()
    {
     // let username= "root";
     // let password ="12345";

      //const headers = new HttpHeaders({Authorization:'Basic'+btoa(username+':'+password)});
      return this.h1.get("http://localhost:9001/getusers"); //{headers});
    }


}
