import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../shared/galleryservice/gallery.service';
import {AddpropertyService } from '../shared/addproperty.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
getgallery:any;
getproperty;

// sessionStorage.getItem('key');
  constructor(public gallery:GalleryService, public addproperty:AddpropertyService) { }

  ngOnInit() {
    this.gallery.gallery().subscribe(data=>{(this.getgallery = data);console.log(this.getgallery)})
    console.log("welcome"+JSON.stringify(this.getgallery));
    this.addproperty.getpropertyServicefuntion().subscribe(data=>{this.getproperty = data;console.log(this.getproperty)})
  }


}
