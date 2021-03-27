import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
user =true;
  canActivate()
    {
      if(this.user == true){
        return true;
      }
      else{
        return false
      }
  }
  
}
