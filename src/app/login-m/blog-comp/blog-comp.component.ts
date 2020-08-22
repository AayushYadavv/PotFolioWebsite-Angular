import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { MobileViewService} from "../../shared/services/mobile-view.service"
import { ServerCommService} from "../../shared/services/server-comm.service"
import {Blog,Blogs} from '../../shared/models/blog'
@Component({
  selector: 'app-blog-comp',
  templateUrl: './blog-comp.component.html',
  styleUrls: ['./blog-comp.component.css']
})

export class BlogCompComponent implements OnInit {

  constructor(private mobServ:MobileViewService,private serverComm:ServerCommService) { }
  
  @Input() blog :Blog = Blogs[0] 
  @Input() adminFunc:boolean
  @Output() delEvent = new EventEmitter<number>() 




  liked = false
  mobileView :boolean  
  ngOnInit(): void {
    
    this.mobServ.mobileView.subscribe((res)=>{
      this.mobileView = res
    })
  }

  toggleLike(){
    if(this.liked){
      this.blog.likes-= 1
      this.liked = !this.liked
      this.serverComm.dislikeBlog(this.blog.blogID).subscribe()
    }else{
     this.blog.likes += 1
      this.liked = !this.liked
      this.serverComm.likeBlog(this.blog.blogID).subscribe()

    }
  }

  deleteBlog(){
    this.delEvent.emit(this.blog.blogID)
  }


}
