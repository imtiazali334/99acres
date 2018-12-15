import { Component, OnInit } from '@angular/core';
import { AddDataService } from '../../shared/addDataService/add-data.service'

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  private _values1 = ["Andhra pradesh", "karnataka", "Chennai","maharashtra"];
  private _values2 = []
  statesData:any;
  states:any;
  exampleSatesData:any;
  val:any;
  photo:File;
  resPostData:any;
  exampleStates;
  districts;
  constructor(private addData :AddDataService) { }

  ngOnInit() {
    this.addData.loadSatesAndDistricts().subscribe(res=>{
      this.statesData = res;
      this.exampleStates = this.statesData.states
      console.log(this.statesData)
    });
  }
  uploadPhoto(event){
    console.log(event);
    this.photo = event.target.files[0];
    console.log(this.photo)
  }
  firstDropDownChanged(val: any) {
    console.log(val);
    this.val = val;
    for(let key in this.exampleStates){
        if(this.exampleStates[key].state == val){
          console.log(this.val);
          this.districts = this.exampleStates[key].districts;
      }
    }
  }
  PostAddData(data){
    const uploadData = new FormData();
      uploadData.append("name",data.name);
      uploadData.append("contact",data.contact);
      uploadData.append("photo",this.photo);
      uploadData.append("postedBy",data.postedBy);
      uploadData.append("propertyType",data.propertyType);
      uploadData.append("beadRoom",data.beedRoom);
      uploadData.append("state",this.val);
      uploadData.append("district",data.district);
      uploadData.append("bulldingName",data.bulldingName);
      uploadData.append("area",data.area);
      uploadData.append("street",data.street);
      uploadData.append("doorNo",data.doorNo);
      uploadData.append("landMark",data.landMark);
      uploadData.append("zip",data.zip);
      // uploadData.append("state",this.val);
      // uploadData.append("district",data.district);

  this.addData.postData(uploadData).then(data=>this.resPostData = data);
  console.log(this.resPostData);
  this.PostAddData1(data);
  }

  
  PostAddData1(data){
    data.photo = this.photo;
    data.state = this.val;
    console.log(data)
  }
}


