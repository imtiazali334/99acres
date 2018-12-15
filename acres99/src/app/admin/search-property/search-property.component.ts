import { Component, OnInit } from '@angular/core';
import {AddpropertyService } from  '../../shared/addproperty.service';

@Component({
  selector: 'app-search-property',
  templateUrl: './search-property.component.html',
  styleUrls: ['./search-property.component.css']
})
export class SearchPropertyComponent implements OnInit {
 data:any
 p:Number = 1;
 searchterm:any;
  constructor(public addprperty:AddpropertyService) { }

  ngOnInit() {
    this.addprperty.getpropertyServicefuntion().subscribe(data=>{this.data = data})
  }
 getdata(){
   this.addprperty.getpropertyServicefuntion().subscribe(data=>{this.data = data})
   console.log(this.data)
 }

}

