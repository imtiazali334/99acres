import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

@Injectable()
export class RegisterService {
 url:string = "http://localhost:3200/register";
 registerRes
  constructor(private http:Http) { }
  register(data){
    return this.http.post(this.url,data).map((res:Response)=>
      this.registerRes = res.json());
  }

}
