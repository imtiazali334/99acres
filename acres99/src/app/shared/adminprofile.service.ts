import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AdminprofileService {
url:any = "http://localhost:3200/userprofile";
url1:any = "http://localhost:3200/register"
  constructor(public http:Http) { }

  getadminprofile(){
   return  this.http.get(this.url).map((res:Response) => res.json());

  }
getAdminById(id){
  console.log(id);
  return this.http.get(this.url1+`/${id}`).map((res:Response)=>res.json());

}
}
