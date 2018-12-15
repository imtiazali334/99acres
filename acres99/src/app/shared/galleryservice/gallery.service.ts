import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GalleryService {
  url:any= "http://localhost:3200/gallery"
data:any;
  constructor(public http:Http) { }

  gallery(){
    return this.http.get(this.url).map((res:Response)=>res.json());
  }
}
