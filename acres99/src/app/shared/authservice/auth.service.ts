import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class AuthService {
 url:any = "http://localhost:3200/authenticate";
authdata
token:any;
  constructor(private http:Http) { }
authLogin(data){
  return this.http.post(this.url,data).map((res: Response)=>this.authdata  =res.json())
}
// resData(){
//    sessionStorage.setItem('key',this.authdata.token);
// }
getTokenfromSession(){
  var jtoken = sessionStorage.getItem('token');
  console.log(jtoken);
}
logedIn(){
  return !! sessionStorage.getItem('token');
}

}
