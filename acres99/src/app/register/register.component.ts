import { Component, OnInit } from '@angular/core';
import {RegisterService } from "../shared/register/register.service";
import { Response} from '@angular/http';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
success:any;
status:any;
data:any;
name:any;
res:any ="yes";
eamil;
message:any;
id;

constructor(private register:RegisterService,public router :Router) { }
  ngOnInit() {
  }
  registerResponse;
  selectGender:any;
  gender:any = ["Male","Female"];
  radioChange(event){
    this.selectGender = event.target.value;
    console.log(this.selectGender);
  }
  signup(data){
    data.gender = this.selectGender;
    this.register.register(data).subscribe(res=>{
      this.registerResponse = res;
      console.log(JSON.stringify(this.registerResponse));

      this.id = this.registerResponse._id;
      
      console.log(this.id);
      if(this.id != null &&  this.id != undefined){
        console.log(this.id);
        setTimeout(function(){
          this.router.navigate(['/admindashbord/admin']);
          this.message = "Successfully Regited..!!"
        },300)
      }
     
     } );

  }
}
