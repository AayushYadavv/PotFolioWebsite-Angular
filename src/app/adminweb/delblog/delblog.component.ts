import { Component, OnInit } from '@angular/core';
import { Blog } from "../../shared/models/blog"
import {ServerCommService} from '../../shared/services/server-comm.service'

@Component({
  selector: 'app-delblog',
  templateUrl: './delblog.component.html',
  styleUrls: ['./delblog.component.css']
})
export class DelblogComponent implements OnInit {
  blogs:Blog[]
  getdata(){
    this.serverComm.getBlogs().subscribe({next:(res=>{
      this.blogs= res
  })})
  
  }
  constructor(private serverComm :ServerCommService) { }

  ngOnInit(): void {
    this.getdata()
  }
  deleteBlog(event:any){
    this.serverComm.blogDel(event).subscribe({next:(res)=>{
      if(res){
        this.getdata()
        alert("Blog deleted")
      }else{
        alert("Error ,Unable to delete")
      }
    },
  error:(err)=>{
    alert("Network Error ,Unable to delete")
  }});
    
  
   }
}
