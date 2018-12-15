import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { AddpropertyService } from '../../shared/addproperty.service';
import { NgForm } from '@angular/forms';
import {Router } from '@angular/router'

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  p: number = 1;
getdata:any;
getdata1:any;
data:any;
deletedata:any;
updatedata:any;
addpropeformDirectiveProvider
selectedFile: File;
imgMsg;
imageurl;
editedimgurl;
_id;
name;
landmark;
area;
location:any;
zip:any;
flat;
photo;
clear;
// myInputVariable:any;
resetfile:File=null ;
resetForm(){
  this.name="",
  this.flat = "",
  this.area = "",
  this.landmark = "",
  this.location = "",
  this.zip = ""

  
}

@ViewChild('myInput')
 myInputVariable: ElementRef;
 photoreset(){
this.myInputVariable.nativeElement.value = '';
 }

  constructor(public addproperty:AddpropertyService,public router:Router) {}

  ngOnInit() {
    this.addproperty.getpropertyServicefuntion().subscribe(dataresult=>{
      this.getdata = dataresult;console.log(this.getdata);
    });
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  uploadData() {
    console.log("lookdata "+this.name);
    const uploadData = new FormData();
    uploadData.append('_id', this._id);
    uploadData.append('upload', this.selectedFile);
    uploadData.append('name', this.name);
    uploadData.append('flat', this.flat);
    uploadData.append('area', this.area);
    uploadData.append('location', this.location);
    uploadData.append('landmark', this.landmark);
    uploadData.append('zip', this.zip);

    console.log(uploadData);  

    this.addproperty.uploadImage(uploadData).then(data => {
      this.imgMsg = data;
      this.onload();
      alert("Data submited "+ this.name);
      console.log(this.imgMsg.json())
      this.resetForm();
           
    });
    
    //like this u can call get function agin in post call it will give data with last posted data

  }
 

  ondelete(data){ 
    if (confirm('Are you sure to delete this record ?') == true) {
      console.log('before')
      this.addproperty.deleteproperty(data).subscribe(data=>{
        this.deletedata = data;
        alert(this.deletedata._body)
        this.onload();
        // this.router.navigate(['/admindashbord/add-property'])

      });
    }
}
onfindbyid(_id){
  alert(_id);
  this.addproperty.findbyid(_id).subscribe(data=>this.updatedata = data);
}
onload(){
  this.addproperty.getpropertyServicefuntion().subscribe(dataresult=>{
    this.getdata = dataresult;console.log(this.getdata);
  });

}
}
