//Link for Authentication and manage session
//https://www.c-sharpcorner.com/article/angular-7-login-with-session-authentication-using-the-reactive-form/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    // navigate to login page as user is not authenticated      
    this.router.navigate(['']);
    return false;

  }
  public isLoggedIn(): boolean {      
    let status = false;      
    if (localStorage.getItem('isLoggedIn') == "true") {      
       status = true;      
    }    
    else {      
       status = false;      
       }      
    return status;      
    }    
 } 
