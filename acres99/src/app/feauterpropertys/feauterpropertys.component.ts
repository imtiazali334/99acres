import { Component, OnInit } from '@angular/core';
import { AddpropertyService } from '../shared/addproperty.service'

@Component({
  selector: 'app-feauterpropertys',
  templateUrl: './feauterpropertys.component.html',
  styleUrls: ['./feauterpropertys.component.css']
})
export class FeauterpropertysComponent implements OnInit {
getImages:any;
  constructor(private addproperty : AddpropertyService) { }

  ngOnInit() {
    this.addproperty.getpropertyServicefuntion().subscribe(data =>{this.getImages = data;
    console.log(this.getImages)});
  }

}
