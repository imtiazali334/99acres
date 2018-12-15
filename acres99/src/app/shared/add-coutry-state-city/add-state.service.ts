import { Injectable } from '@angular/core';
import { Http , Response} from '@angular/http'
@Injectable()
export class AddStateService {
postUrl = "http://localhost:3200/addstate"
  constructor(private http:Http) { }

  postNewState(data){
    return this.http.post(this.postUrl,data).map((res:Response)=>res.json())
  }
  getStateData(){
    return this.http.get(this.postUrl).map((res:Response)=>res.json());
  }
  deleteState(id){
    return this.http.delete(this.postUrl+"/"+id).map((res:Response)=>res.json());
  }


}
