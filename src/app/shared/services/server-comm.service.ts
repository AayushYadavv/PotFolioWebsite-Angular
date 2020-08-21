import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { tap ,pluck} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServerCommService {
  headerPost = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );
  apiRootLink = 'http://192.168.43.235:3000';

  constructor( private http:HttpClient) { }
  profileUpload(formData:FormData){
    return this.http.post(`${this.apiRootLink}/uploadProfilepic`,formData,{withCredentials:true}).pipe(
      pluck('flag'),
      tap((res)=>{
        console.log(res)
      })
    )
  }
  blogUpload(blogData){
    return this.http.post(`${this.apiRootLink}/addblog`,`content=${blogData.content}`,      {
      headers: this.headerPost,
      withCredentials: true,
    }).pipe(
      pluck('flag'),
      tap((res)=>{ 
        console.log(res)})
    )
  }
}
