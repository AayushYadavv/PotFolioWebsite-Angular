import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ServerCommService} from '../../shared/services/server-comm.service'
import {tap} from 'rxjs/operators'
import { Blog} from '../../shared/models/blog'
import { AuthService} from '../../shared/services/auth.service'
import { of } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  animations: [   trigger('listAnimation', [
    transition('* => *', [

      query(':enter', style({ opacity: 0 }), {optional: true}),

      query(':enter', stagger('100ms', [
        animate('1s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateY(-25px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
        ]))]), {optional: true})
    ])
  ])]
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
