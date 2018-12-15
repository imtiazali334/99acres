import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AddpropertyService {
  propertydata: any;
  data: any;
  data1: any;
  headers;
  reqHeader;
  constructor(public http: Http) { }
  url: string = "http://localhost:3200/api/addproperty";


AddpropertyService(data){

  return this.http.post(this.url, data).map((res: Response) => res.json());
}
getpropertyServicefuntion(){
  // var reqHeader = new Headers({
  //   'Content-Type': 'application/json',
  //   'token': sessionStorage.getItem('token')
  // });
  return this.http.get(this.url).map((res: Response) => res.json());
}

updateServiceFunction(updateValue){
  return this.http.put(this.url, updateValue).map(res => {
    res.json();
    alert(res);
    error => console.log(error);
  })


}
deleteproperty(_id){
  return this.http.delete(this.url + `/${_id}`).map((res: Response) => res);

}
findbyid(_id){
  return this.http.delete(this.url + `/${_id}`).map((res: Response) => res.json());

}
uploadImage(data) {
  console.log(data);
  let imageData;
  return new Promise((resolve, reject) => {
    this.http.post(this.url, data).subscribe((res) => {
      imageData = res;
      console.log(imageData);
      resolve(imageData);
    });
  });
}

}