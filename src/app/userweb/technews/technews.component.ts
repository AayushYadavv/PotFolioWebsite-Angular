import { Component, OnInit } from '@angular/core';
import {  ServerCommService} from "../../shared/services/server-comm.service";
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
loading:boolean=false
news
getdata(){

}
  constructor(private servComm:ServerCommService,private authserv:AuthService) { }

  ngOnInit(): void {
    this.authserv.waiting.subscribe(res=>{
      this.loading = res
    })
    if(!this.news){
    this.servComm.getNews().subscribe({
      next:res=>{
        if(res){
          this.news = res
        }else{
          this.news = []
        }
      }
    })
  }
  }

}
