import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { tap ,pluck,map} from 'rxjs/operators'
import {Blog} from '../models/blog'

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
  blogDel(id:Number){
    return this.http.post(`${this.apiRootLink}/delBlog/${id}`," ",{headers: this.headerPost,withCredentials:true}).pipe(pluck('flag'),tap(res=>{console.log(res)}))
  }
  likeBlog(id:Number){
    return this.http.post(`${this.apiRootLink}/likeBlog/${id}`,{headers: this.headerPost,withCredentials:true}).pipe(tap(res=>{console.log(res)}))

  }
  dislikeBlog(id:Number){
    return this.http.post(`${this.apiRootLink}/dislikeBlog/${id}`,{withCredentials:true}).pipe(tap(res=>{console.log(res)}))

  }
  getBlogs(){
    return this.http.get<Blog[]>(`${this.apiRootLink}/getBlogs`,{withCredentials:true})

  }
  addCerti(formData:FormData){
    return this.http.post(`${this.apiRootLink}/addcerti`,formData,{withCredentials:true}).pipe(pluck('flag'),tap(res=>{console.log(res)}))
  }
  getQuote(){
    return this.http.get("https://type.fit/api/quotes",{headers:this.headerPost}).pipe(
      map((res)=>{
        const random = Math.floor(Math.random()*1000)
        
        return res[random]
      })
     
      
    )
  }
}
