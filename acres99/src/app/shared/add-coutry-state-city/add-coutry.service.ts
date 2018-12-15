import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class AddCoutryService {

  url = "http://localhost:3200/addcountry";

  constructor(private http:Http) { }
  PostCountry(data){
return this.http.post(this.url,data).map(res=>res.json());
  }
  getCountryList(){
    return this.http.get(this.url).map(res=>res.json());
  }
deleteCountry(id){
  return this.http.delete(this.url+`/${id}`).map(res=>res.json());
}
updateCountry(id,docs){
  return console.log(id,docs);
}

}
