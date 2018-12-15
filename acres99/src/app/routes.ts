import { Routes } from '@angular/router';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AddPropertyComponent } from './admin/add-property/add-property.component';
import { ViewPropertyComponent } from './admin/view-property/view-property.component';
import { SearchPropertyComponent } from './admin/search-property/search-property.component';
import { HeaderComponent} from './header/header.component';
import { AppComponent } from './app.component'
import { EnquiryComponent } from './header/enquiry/enquiry.component';
import { CustomerenquiryComponent } from './admin/customerenquiry/customerenquiry.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard} from './shared/authguard/guard.guard';
import { AddDataComponent } from './admin/add-data/add-data.component';
import { FeauterpropertysComponent } from './feauterpropertys/feauterpropertys.component';
import { AddPlaceComponent } from './admin/add-place/add-place.component';
import { ProfileDetailsComponent } from './admin/profile-details/profile-details.component';



export const routes : Routes=[
     {path:"admindashbord",component:DashbordComponent,canActivate:[AuthGuard],children:[
          {path:"admin",component:AdminComponent,canActivate:[AuthGuard]},
          {path:"add-property",component:AddPropertyComponent,canActivate:[AuthGuard]},
          {path:"view-property",component:ViewPropertyComponent,canActivate:[AuthGuard]},
          {path:"search-property",component:SearchPropertyComponent,canActivate:[AuthGuard]},
          {path:"customer-enquiry",component:CustomerenquiryComponent,canActivate:[AuthGuard]},
          {path:"add-data",component:AddDataComponent,canActivate:[AuthGuard]},
          {path:"feature-property",component:FeauterpropertysComponent,canActivate:[AuthGuard]},
          {path:"add-place",component:AddPlaceComponent,canActivate:[AuthGuard]},
          {path:"profile-details",component:ProfileDetailsComponent,canActivate:[AuthGuard]},
          
          // { path: 'login/success', redirectTo: 'DashbordComponent', pathMatch: 'full' },
     ]},
     {path:"",component:HeaderComponent},
     {path:"login",component:LoginComponent},
     {path:"register",component:RegisterComponent}

]