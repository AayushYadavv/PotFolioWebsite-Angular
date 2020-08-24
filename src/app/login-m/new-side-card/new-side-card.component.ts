import { Component, OnInit } from '@angular/core';
import { ServerCommService } from "../../shared/services/server-comm.service";
import { AuthService } from "../../shared/services/auth.service";
@Component({
  selector: 'app-new-side-card',
  templateUrl: './new-side-card.component.html',
  styleUrls: ['./new-side-card.component.css']
})
export class NewSideCardComponent implements OnInit {

  constructor(private servComm:ServerCommService,private authServ:AuthService) { }
  news:any
  loading:boolean=false
  ngOnInit(): void {
  this.authServ.waiting.subscribe(
    res=>{
      this.loading=res
    }
  )
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
