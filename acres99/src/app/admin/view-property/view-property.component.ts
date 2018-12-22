import { Component, OnInit } from '@angular/core';
import { AddDataService } from '../../shared/addDataService/add-data.service'
@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {
  propertyList;
  p:Number = 1;
  constructor(private _dataService: AddDataService) {}
  getData(){
    this._dataService.getDataService().subscribe(res=>{
      this.propertyList = res;
      console.log(this.propertyList);
    })
  }
  ngOnInit() {
   this.getData();
  }
 
}
