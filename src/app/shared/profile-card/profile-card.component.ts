import { Component, OnInit } from '@angular/core';
import { MobileViewService } from '../../shared/services/mobile-view.service'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {
  mobileView :boolean= false

  constructor(private mobileViewService:MobileViewService) { }

  ngOnInit(): void {
    this.mobileViewService.mobileView.subscribe(res=>{

      this.mobileView = res
    })
  }

}
