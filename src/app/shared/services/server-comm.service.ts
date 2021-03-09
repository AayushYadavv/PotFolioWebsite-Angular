import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { tap ,pluck,map} from 'rxjs/operators'
import {Blog} from '../models/blog'
import {Certificate} from "../../shared/models/certificate"
import {Project} from "../../shared/models/projects"

@Injectable({
  providedIn: 'root'
})
export class ServerCommService {
  headerPost = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );
  apiRootLink = 'https://21sa.online';

  constructor( private http:HttpClient) { }
  profileUpload(formData:FormData){
    return this.http.post(`${this.apiRootLink}/uploadProfilepic`,formData,{withCredentials:true}).pipe(
      pluck('flag'),
      tap((res)=>{
       
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
    })
    )
  }
  blogDel(id:Number){
    return this.http.post(`${this.apiRootLink}/delBlog/${id}`," ",{headers: this.headerPost,withCredentials:true}).pipe(pluck('flag'),tap(res=>{}))
  }
  likeBlog(id:Number){
    return this.http.post(`${this.apiRootLink}/likeBlog/${id}`,{headers: this.headerPost,withCredentials:true}).pipe(tap(res=>{}))

  }
  dislikeBlog(id:Number){
    return this.http.post(`${this.apiRootLink}/dislikeBlog/${id}`,{withCredentials:true}).pipe(tap(res=>{}))

  }
  getBlogs(){
    return this.http.get<Blog[]>(`${this.apiRootLink}/getBlogs`,{withCredentials:true})

  }
  addCerti(formData:FormData){
    return this.http.post(`${this.apiRootLink}/addcerti`,formData,{withCredentials:true}).pipe(pluck('flag'),tap(res=>{}))
  }
  getQuote(){
    return this.http.get("https://goquotes-api.herokuapp.com/api/v1/all/quotes",{headers:this.headerPost}).pipe(pluck('quotes'),
      map((res)=>{
        const random = Math.floor(Math.random()*1000)
        
        return res[random]
      })
     
      
    )
  }
  getCerti(){
    return this.http.get<Certificate[]>(`${this.apiRootLink}/getcerti`,{withCredentials:true}).pipe()

  }
  delCerti(id:number){
    return this.http.post(`${this.apiRootLink}/deletecerti/${id}`,' ',{withCredentials:true,headers:this.headerPost}).pipe(pluck('flag'),tap(res=>{console.log(res);
    }))
  }

  addProject(message:any){
   
    return this.http.post(`${this.apiRootLink}/addproject`,
  `projName=${message.projectName}&projPicUrl=${message.projectPicUrl}&projSourceUrl=${message.projectSourceUrl}&projUrl=${message.projectUrl}&projAbout=${message.about}`
  ,{headers:this.headerPost,withCredentials:true}).pipe(pluck('flag'),tap(res=>{
      
      
    }))
  }

  getProjects(){
    return this.http.get<Project[]>(`${this.apiRootLink}/getprojects`).pipe(tap(res=>{
    }))
  }

  sendFeedback(feedback:any){
    return this.http.post(`${this.apiRootLink}/feedback`,`name=${feedback.name}&email=${feedback.email}&content=${feedback.feedback}`,{headers:this.headerPost,withCredentials:true}).pipe(
      pluck('flag'),
      tap(res=>{
        
      })
    )
  }

  getNews(){
    return this.http.get(`${this.apiRootLink}/getnews`,{withCredentials:true}).pipe(
      pluck('news'),
      tap(res=>{
        
        
      })
    )
  }
}
