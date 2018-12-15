import { Component, OnInit } from '@angular/core';
import { EnquiryService} from '../../shared/enquiryservice/enquiry.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
postdata:any;
p:Number =1;
  constructor(public enquiry: EnquiryService) { }

  form(myform:NgForm){
  
  }
  ngOnInit() {
  }
  onsubmit(data){
    alert(data)
this.enquiry.postenquiry(data).subscribe(res=>{this.postdata = res})
console.log(JSON.stringify(data));
alert("Enquire sended");
 }

}
