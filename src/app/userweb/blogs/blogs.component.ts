import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ServerCommService} from '../../shared/services/server-comm.service'
import {tap} from 'rxjs/operators'
import { Blog} from '../../shared/models/blog'
import { AuthService} from '../../shared/services/auth.service'
import { of } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit{
  blogs:Blog[]
  errorMessage = false
  loading:boolean=false
  getdata(){

    this.serverComm.getBlogs().subscribe({next:(res=>{
      this.errorMessage = false
      this.blogs= res
  }),error:err=>{
    this.errorMessage= true
  }})
  
  }
  constructor(private serverComm:ServerCommService,private authServ:AuthService) { }
  ngOnInit(): void {
    this.authServ.waiting.subscribe(res=>{
      this.loading = res
    })
    this.getdata()
  }
 

}
