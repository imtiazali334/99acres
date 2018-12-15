import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../shared/enquiryservice/enquiry.service';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import {}
declare var jQuery: any;
@Component({
  selector: 'app-customerenquiry',
  templateUrl: './customerenquiry.component.html',
  styleUrls: ['./customerenquiry.component.css']
})

export class CustomerenquiryComponent implements OnInit {
  name: any;
  comment: any;
  contact: any;
  dataById;
  id: any;
  email: any;

  constructor(public enquiry: EnquiryService, private router: Router) { }
  enquirydata: String;
  updatedData: any;

  ngOnInit() {
    this.enquiry.getenquiry().subscribe(data => {
      this.enquirydata = data;
      console.log(data);
    });
    this.onload();
    this.refreshList();
  }
  refreshList(){
    this.enquiry.getDataOfEnquiry().subscribe(res=>res);
  }
  onload() {
  this.enquiry.getenquiry().subscribe(data => {
    this.enquirydata = data;});

  }

  updateData(data) {
    this.enquiry.updateData(data).subscribe(res =>{ this.updatedData = res;
    this.onload();
    });
    jQuery("#myModalupdate").modal("hide");
    this.onload();
    // this.refreshList();
    // this.router.navigate(['/admindashbord/customer-enquiry'])
    // this.enquiry.getenquiry().subscribe(data => { this.enquirydata = data; console.log(this.enquirydata) });

  }
  updatefun(id) {
    this.enquiry.getEnquiryById(id).subscribe(res => {
      this.dataById = res;
      this.id = id;
      this.email = this.dataById.email;
      this.name = this.dataById.name;
      this.comment = this.dataById.comment;
      this.contact = this.dataById.contact
    })
  }
}
