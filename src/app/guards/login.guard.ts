import { Injectable } from '@angular/core';
import { Router,CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map,tap, take , skipWhile} from  'rxjs/operators'
import { AuthService} from '../shared/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private authServ:AuthService,private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServ.loggedIn.pipe(
      skipWhile((res)=>{
      
        return res===null
      }),take(1),
      map(res=>{
        return !res
      }),tap((res)=>{
        if(!res){
          this.router.navigateByUrl('/admin')
          
        }
      })
    );
  }
}
