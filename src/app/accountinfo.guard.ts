import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountinfoGuard implements Resolve<any> {

  userObje= [
    { id:'121', name:'Deepak'}
  ]
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userObje;
  }
  
  
}
