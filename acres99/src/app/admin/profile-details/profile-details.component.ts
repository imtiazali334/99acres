import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  constructor( private fb:FormBuilder) { }
  personalDetails :FormGroup;
  ngOnInit() {
    this.personalDetails = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      fatherName: new FormControl(),
      motherName: new FormControl(),
      address: new FormControl(),
      workingAs: new FormControl()
    });
  }
  postData():void {
    console.log(this.personalDetails.value);
    if(this.personalDetails.value.name.length >0){
      console.log(this.personalDetails.value.name.length);
      document.getElementById('success').style.display ="block";
    }else{
      document.getElementById('success').style.display = "none";
    }        

  }
  

}
