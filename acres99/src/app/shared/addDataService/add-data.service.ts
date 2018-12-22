import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http'
@Injectable()
export class AddDataService {
  statesData
stateUrl:any = "../../assets/states-districts/states-and-districts.json";
mainUrl :any = "http://localhost:3200/addData";
  constructor(private http : Http) { }

  loadSatesAndDistricts(){
   return  this.http.get(this.stateUrl).map((res:Response)=>res.json());
  }

  postData(data){
    console.log(data);
    let postData;
    return new Promise((resolve,reject)=>{
      this.http.post(this.mainUrl,data).subscribe((res)=>{
        postData =res;
        console.log(postData)
        resolve(postData);
      })
    });
  }


  getDataService(){
    return this.http.get(this.mainUrl).map(res=>res.json());
  }
}
