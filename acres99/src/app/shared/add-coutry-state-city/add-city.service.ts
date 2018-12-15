import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'

@Injectable()
export class AddCityService {
  cityUrl= "http://localhost:3200/citys"

  constructor( private http:Http) { }
   getCity(){
    return this.http.get(this.cityUrl).map((res:Response)=>res.json());
  }
  
postCity(data){
  return this.http.post(this.cityUrl,data).map((res:Response)=>res.json());
}
deleteCity(id){
  return this.http.delete(this.cityUrl+`${id}`).map((res:Response)=>res.json());
}
}
