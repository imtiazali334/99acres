import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { routes } from './routes';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddPropertyComponent } from './admin/add-property/add-property.component';
import { ViewPropertyComponent } from './admin/view-property/view-property.component';
import { SearchPropertyComponent } from './admin/search-property/search-property.component';
import { AddpropertyService } from './shared/addproperty.service';
import { AdminprofileService } from './shared/adminprofile.service';
import { TemplateComponent } from './template/template.component';
import { SearchPipe } from './search.pipe';
import { EnquiryComponent } from './header/enquiry/enquiry.component';
import { CustomerenquiryComponent } from './admin/customerenquiry/customerenquiry.component'
import { EnquiryService } from './shared/enquiryservice/enquiry.service';
import { GalleryService } from './shared/galleryservice/gallery.service'
import { GalleryComponent} from './gallery/gallery.component';
import { UpdatgalleryComponent } from './updatgallery/updatgallery.component'
import { AuthService } from './shared/authservice/auth.service';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import {RegisterService } from './shared/register/register.service';
import {AuthGuard} from './shared/authguard/guard.guard';
import { FeauterpropertysComponent } from './feauterpropertys/feauterpropertys.component';
import { GetnotificationComponent } from './getnotification/getnotification.component';
import { AddDataComponent } from './admin/add-data/add-data.component';
import { AddDataService } from './shared/addDataService/add-data.service';
import { AddPlaceComponent } from './admin/add-place/add-place.component';
import { AddCoutryService} from './shared/add-coutry-state-city/add-coutry.service';
import { AddStateService } from './shared/add-coutry-state-city/add-state.service';
import { AddCityService } from './shared/add-coutry-state-city/add-city.service';
import { BulderLoginComponent } from './bulder-login/bulder-login.component';
import { ProfileDetailsComponent } from './admin/profile-details/profile-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashbordComponent,
    LoginComponent,
    AdminComponent,
    AddPropertyComponent,
    ViewPropertyComponent,
    SearchPropertyComponent,
    TemplateComponent,
    SearchPipe,
    EnquiryComponent,
    CustomerenquiryComponent,
    GalleryComponent,
    UpdatgalleryComponent,
    GalleryComponent,
    GalleryComponent,
    FooterComponent,
    RegisterComponent,
    FeauterpropertysComponent,
    GetnotificationComponent,
    AddDataComponent,
    AddPlaceComponent,
    BulderLoginComponent,
    ProfileDetailsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AddpropertyService,
    AdminprofileService,
    EnquiryService,
    GalleryService,
    AuthService,
    RegisterService,
    AuthGuard,
    AddDataService,
    AddCoutryService,
    AddStateService,
    AddCityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
