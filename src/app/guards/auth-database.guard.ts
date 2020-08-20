import { Injectable } from '@angular/core';
import { Router,CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service'
import { tap,map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthDatabaseGuard implements CanLoad {
  constructor(private authServ:AuthService,
    private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServ.isLoggedIn().pipe(
      map(res=>{
        return res.isLoggedIn
      }),tap((res)=>{
        if(!res){
          this.router.navigateByUrl('/login')
        }
      })
    )
  }
}
