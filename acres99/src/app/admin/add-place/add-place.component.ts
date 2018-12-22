import { Component, OnInit } from '@angular/core';
import { AddCoutryService } from '../../shared/add-coutry-state-city/add-coutry.service';
import { AddStateService } from '../../shared/add-coutry-state-city/add-state.service';
import { AddCityService } from 'app/shared/add-coutry-state-city/add-city.service';
import { elementAt } from 'rxjs/operator/elementAt';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
  data = { countryName: "", _id: "" }
  countryName: any;
  loopDataState = [];
  CountrysList: any;
  name;
  cName;
  cityName;
  countryvalue;
  selectedCountry;
  countryCode;
  addState;
  stateData;
  getStateData;
  stateName;
  countryId: string;
  uploadData: any;
  countryNameForStateDropDown;
  dropDownState = { stateName: "" }
  finalValue: any;
  stateId: string;
  postCityRes;
  message;
  messageState;
  p: Number = 1;
  _id: string;
  cityList: any;
  itemsPerPage:Number = 5;
  constructor(private addCountry: AddCoutryService, private addStateService: AddStateService, private addCity: AddCityService) { }

  ngOnInit() {
    this.getCountryList();
    this.getStateList();
    this.getCityList();

  }
  getCityList() {
    this.addCity.getCity().subscribe(res => {
      this.cityList = res;
      console.log(this.cityList);
    })
  }
  getStateList() {
    this.addStateService.getStateData().subscribe(resresult => {
      this.getStateData = resresult;
    });
  }
  getCountryList() {
    this.addCountry.getCountryList().subscribe(resultData => {
      this.CountrysList = resultData;
    });
  }

  postNewCountry() {
    this.data.countryName = this.countryName;
    this.data._id = this._id;
    console.log(this.countryName)
    this.addCountry.PostCountry(this.data).subscribe(res => {
      console.log(res)
      this.getCountryList();
      if (this._id === res._id) {
        this.message = `${this.countryName} Update Successfully `
      } else {
        this.message = ` ${this.countryName} Added Successfully..!!`
      }
      this.countryName = "";
      this._id = "";
    });
  }


  postNewStateName(data) {
    // this.countryId = this.CountrysList.filter(item => {
    //   if (this.CountrysList.countryName === data.countryName)
    //     return item.countryName
    // });

    
    // for(let key in this.CountrysList){
    //   if(this.CountrysList[key].countryName == this.countryName ){
    //     this.countryId = this.CountrysList[key]._id;
    //     break ; 
    //   }else {
    //     console.log("NO data found with CountryName "+this.countryName)
    //   }
    // }
    this.countryId = this.CountrysList.forEach(element => {this.CountrysList.countryName == this.countryName}).map(Obj=>Obj.countryId);
    console.log(this.countryId)
    data.countryId = this.countryId;
    data.stateName = this.stateName;
    data.countryName = this.countryName;
    data._id = this._id;
    this.addStateService.postNewState(data).subscribe(resData => {
      this.stateData = resData;
      console.log(this.stateData);
      this.getStateList();

      //    if(this.stateData._id.length >1){
      //   this.messageState = `${this.stateName} Added successfully` 
      // }else {this.messageState = `Error in Adding state`}
    });
    this.countryName = "";
    this._id = "";
    this.stateName = "";
  }
  getCountryNameToUpdateState(event) {
    this.countryName = event.target.value;

    this.loopDataState = (this.getStateData.filter(item =>item.countryName === this.countryName)
      .map(Obj =>Obj.stateName))

    if (this.loopDataState.length === 0) {
      this.loopDataState.push("No states availble");
    }
    this.getStateList();
  }
  postNewCityName(data) {
    this.stateName = data.stateName;
    this.stateId = (this.getStateData.filter(item => item.stateName === this.stateName)).map(obj => {
      return obj._id;
    });
    data.countryName = this.countryName;
    data.countryId = this.countryId;
    data.stateId = this.stateId;
    data._id = this._id;
    this.addCity.postCity(data).subscribe(res => {
      this.postCityRes = res;
      this.getCityList();
    });



  }
  // ----- crud oprations-------

  coutryDelete(id) {

    this.addCountry.deleteCountry(id).subscribe(res => {
      this.getCountryList();
    });

  }
  contryUpdate(id, countryName) {
    this.countryName = countryName;
    this._id = id
    this.addCountry.updateCountry(id, countryName);
  }

  stateDelete(id) {
    this.addStateService.deleteState(id).subscribe(data => {
      this.getStateList();
    });
  }
  stateUpdate(data) {
    this.countryName = data.countryName;
    this.stateName = data.stateName;
    this._id = data._id;
  }
  cityDelete(data){
    this.addCity.deleteCity(data._id).subscribe(res=>{
      this.getCityList();
    });
  }
  cityUpdate(data){
    this.cityName = data.cityName;
    this.countryName = data.countryName;
    this.stateName = data.stateName;
    this._id= data._id;
  
  }
}
