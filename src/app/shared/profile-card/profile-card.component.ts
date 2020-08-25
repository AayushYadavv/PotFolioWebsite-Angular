import { Component, OnInit } from '@angular/core';
import { MobileViewService } from '../../shared/services/mobile-view.service'
import { ServerCommService} from '../../shared/services/server-comm.service'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],

})
export class ProfileCardComponent implements OnInit {
  mobileView :boolean= false
  quote:String = "Tit for Tat"
  author:String = ""
  constructor(private serverComm:ServerCommService,private mobileViewService:MobileViewService) { }

  ngOnInit(): void {
    this.mobileViewService.mobileView.subscribe(res=>{

      this.mobileView = res
    })
 
    this.serverComm.getQuote().subscribe({next:res=>{
      this.quote = res.text
      this.author = res.author
    }})
    
  }

}
