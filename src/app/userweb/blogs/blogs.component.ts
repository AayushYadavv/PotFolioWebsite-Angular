import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ServerCommService} from '../../shared/services/server-comm.service'
import {tap} from 'rxjs/operators'
import { Blog} from '../../shared/models/blog'
import { of } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  blogs:Blog[]
  getdata(){
    this.serverComm.getBlogs().subscribe({next:(res=>{
      this.blogs= res
  })})
  
  }
  constructor(private serverComm:ServerCommService) { }
  ngOnInit(): void {
    
    this.getdata()
  }
 

}
