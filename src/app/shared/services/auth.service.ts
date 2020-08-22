import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, BehaviorSubject } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
interface loginFormFormat {
  name: String;
  pass: String;
}
interface loginResponse {
  message: String;
  flag: boolean;
}

interface logoutResponse {
  message: String;
}

interface isloggedInResponse {
  isLoggedIn: boolean;
  access:boolean
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headerPost = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );

  apiRootLink = 'http://192.168.43.235:3000';
  loggedIn = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  logout() {
    return this.http
      .get<logoutResponse>(`${this.apiRootLink}/logout`, {
        withCredentials: true,
      })
      .pipe(
       
      );
  }

  login(credentials: loginFormFormat) {
    // console.log(credentials);
    return this.http
      .post<loginResponse>(
        `${this.apiRootLink}/login`,
        `name=${credentials.name}&pass=${credentials.pass}`,
        {
          headers: this.headerPost,
          withCredentials: true,
        }
      )
      .pipe(
        tap(() => {
          console.log('tappped inside')
          
        })
      );
  }
  isLoggedIn() {
    return this.http
      .get<isloggedInResponse>(`${this.apiRootLink}/isloggedin`, {
        withCredentials: true,
      }).pipe(tap((res)=>{ 
        this.loggedIn.next(res.isLoggedIn)
      }))
      
  }
}
