import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/authservice/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
msg:any;
store:any;
  constructor(public router:Router, private auth:AuthService) { }

  ngOnInit() {
  }
data:any;
logdata
Logdata;
token:any;
sessionStorage:any;
message:any;
id:any;
userId;

  onlogin(data){
    this.auth.authLogin(data).subscribe(res=>{
      this.logdata = res;
      console.log(JSON.stringify(this.logdata.token));
      this.token = this.logdata.token;
      this.message = this.logdata.message;
      this.id =this.logdata.id
      console.log(this.token + "this is user id "+ this.id)
    sessionStorage.setItem('token',this.token);
    this.userId = sessionStorage.setItem('id',this.id);
    var un = 'undefined';
    if(sessionStorage.getItem('token') === null ||sessionStorage.getItem('token')===un){
      this.router.navigate(['/login']);
    }else{
    this.router.navigate(['/admindashbord/admin'])
  }
    });   
    
  }
  // getTokenfromSession(){
  //   var jtoken = sessionStorage.getItem('token');
  //   console.log(jtoken);
  // }
  
}
