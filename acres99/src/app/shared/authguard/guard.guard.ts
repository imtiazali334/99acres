import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authservice/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private auth: AuthService,
        private router: Router
      ) {}
  canActivate():boolean{
   if(this.auth.logedIn()){
     return true;
   }
   else{
     this.router.navigate(['/login'])
   }
  }
}