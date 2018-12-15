import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class EnquiryService {
url:any="http://localhost:3200/enquiry"
  constructor(public http:Http) { }
name:any;
authdata:any;
id:any;
getEnquiryData;
enquiry:any =  [];
getenquiry():any{
  return this.http.get(this.url).map((res:Response)=>
    res.json()
    )}
getDataOfEnquiry(){
  return this.http.get(this.url).map((res:Response)=>res.json())
}


updateData(data){
  return this.http.put(this.url+`/${this.id}`,data).map((res:Response)=> res.json)
}

getEnquiryById(id){
  this.id =id
  return this.http.get(this.url+`/${id}`).map((res:Response)=>
    res.json()
   
  );
}
postenquiry(docs){
  return this.http.post(this.url,docs).map((res:Response)=>{this.authdata = res.json();console.log(res)});
 
}
}
