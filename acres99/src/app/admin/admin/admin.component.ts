import { Component, OnInit } from '@angular/core';
import { AdminprofileService } from '../../shared/adminprofile.service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  admindata:any
  userId:any;
  userData:any;
  name:string;
  email:string;
  DOB:string;
  created_at:Date;
  gender:string;
  
  constructor( private adminprofile:AdminprofileService,public router:Router) {
    this.userId =sessionStorage.getItem('id');
    var un = "undefined";
    if(sessionStorage.getItem('token') ===null || sessionStorage.getItem('token') == un){
      this.router.navigate(['/login']);
    }else{ console.log("Login with credentials");
  }
   }
   
  

  
  ngOnInit() {
   this.adminprofile.getAdminById(this.userId).subscribe(resultdata =>{
     this.userData = resultdata;
     console.log(this.userData);
     this.name = this.userData.name;
     this.email = this.userData.email;
     this.DOB = this.userData.DOB;
     this.created_at = this.userData.registed_at;
     this.gender = this.userData.gender
    });
  }
}
