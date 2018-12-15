import { Component, OnInit } from '@angular/core';
import { AddCoutryService } from '../../shared/add-coutry-state-city/add-coutry.service';
import { AddStateService } from '../../shared/add-coutry-state-city/add-state.service';
import { AddCityService } from 'app/shared/add-coutry-state-city/add-city.service';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  data = {countryName:"",_id:""}
  countryName:any;
  loopDataState=[];
  CountrysList:any;
  name;
  countryvalue;
  selectedCountry;
  countryCode;
  addState;
  stateData;
  getStateData;
  stateName;
  countryId :string;
  uploadData:any;
  countryNameForStateDropDown;
  dropDownState={stateName:""}
  finalValue:any;
  stateId:string;
  postCityRes;
  message;
  messageState;
  p:Number =1;
  _id:string;
  cityList:any;
  constructor(private addCountry : AddCoutryService, private addStateService :AddStateService, private addCity:AddCityService) { }

  ngOnInit() {
      this.getCountryList();
     this.getStateList();
     this.getCityList();

  }
  getCityList(){
    this.addCity.getCity().subscribe(res =>{
      this.cityList = res;
      console.log(this.cityList);
    })
  }
      getStateList(){
        this.addStateService.getStateData().subscribe(resresult => {
          this.getStateData = resresult;
        });
      }
  getCountryList(){
    this.addCountry.getCountryList().subscribe(resultData =>{
      this.CountrysList =  resultData;
    });
  }
  
  postNewCountry(){
    this.data.countryName = this.countryName;
    this.data._id = this._id;
    console.log(this.countryName)
    this.addCountry.PostCountry(this.data).subscribe(res=>{
      console.log(res)
    this.getCountryList();
    if(this._id === res._id){
      this.message = `${this.countryName} Update Successfully `
    }else {
    this.message = ` ${this.countryName} Added Successfully..!!`
    }
    this.countryName ="";
    this._id ="";
    });
  }
  
  
  postNewStateName(data){
    console.log(data.countryName);
    console.log(data)

    console.log(this.CountrysList)
    this.countryId=this.CountrysList.filter(iteam=>{
                                                    if(this.CountrysList.countryName === data.countryName)
                                                  return this.CountrysList._id
                                                    })
 
    console.log(this.countryId);
    // for(let key in this.CountrysList){
    //   if(this.CountrysList[key].countryName == this.countryName ){
    //     this.countryCode = this.CountrysList[key]._id;
    //     console.log(this.countryCode);
    //     break ; 
    //   }else {
    //     console.log("NO data found with CountryName "+this.countryName)
    //   }
    // }
    data.countryId = this.countryId;
    data.stateName = this.stateName;
    data.countryName =this.countryName;
    data._id = this._id;
    this.addStateService.postNewState(data).subscribe(resData =>{
      this.stateData = resData;
      console.log(this.stateData);
      this.getStateList();

    //    if(this.stateData._id.length >1){
    //   this.messageState = `${this.stateName} Added successfully` 
    // }else {this.messageState = `Error in Adding state`}
    });
    console.log(data)
    this.countryName = "";
    this._id = "";

  }
  getCountryNameToUpdateState(event){
    this.countryNameForStateDropDown = event.target.value;

  this.loopDataState = (this.getStateData.filter(item => item.countryName === this.countryNameForStateDropDown))
                        .map(Obj =>{
                          return Obj.stateName;
                        });
                        console.log(this.loopDataState)

  if(this.loopDataState.length == 0){
    this.loopDataState.push("No states availble");
  } 
}
  postNewCityName(data){
    this.stateName = data.stateName;
    this.stateId = (this.getStateData.filter(item=>item.stateName === this.stateName)).map(obj =>{
      return obj._id;
    });
    console.log(this.stateId);
    data.countryName = this.countryNameForStateDropDown;
    data.countryId = this.countryId;
    data.stateId =this.stateId;
    this.addCity.postCity(data).subscribe(res=>{
      this.postCityRes =res;
    });
    
    console.log(this.postCityRes);
 

  }
// ----- crud oprations-------

coutryDelete(id){
  
  console.log(id);
  this.addCountry.deleteCountry(id).subscribe(res=>{
    console.log(res);
    this.getCountryList();
  });

}
  contryUpdate(id,countryName){
  console.log(id);
  console.log(countryName);
  this.countryName = countryName;
  this._id = id
  this.addCountry.updateCountry(id,countryName);
  }

  stateDelete(id){
    this.addStateService.deleteState(id).subscribe(data=>{
      console.log(data);
      this.getStateList();
    });
  }
 stateUpdate(data){
   this.countryName = data.countryName;
   this.stateName =data.stateName;
   this._id= data._id
  //  this.addStateService.postNewState(data).subscribe(res=>{
  //   this.getStateList();
  //  })
 }
}
