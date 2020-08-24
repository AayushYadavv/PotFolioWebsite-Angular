import { Component, OnInit, AfterViewInit ,Renderer2, AfterContentInit } from '@angular/core';
import { AutoAdminPageService } from './auto-admin-page.service';
import { MobileViewService } from './shared/services/mobile-view.service'
import { AuthService } from './shared/services/auth.service'
import { Router} from '@angular/router'

import { BehaviorSubject } from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit,OnInit,AfterContentInit{
  loggedin$ : BehaviorSubject<boolean>
  constructor(private authServ:AuthService,private adminServ: AutoAdminPageService,
    private mobileViewSer:MobileViewService,private router:Router) {
      this.loggedin$ = this.authServ.loggedIn
    }
  title = 'myweb';
  selected = 'Menu';
  sidebarOpen:boolean=false
  adminPanelActive = true;
  mobileView :boolean


  ngOnInit(){

    if(window.innerWidth<900){
      this.mobileViewSer.change(true)
    }else{
      this.mobileViewSer.change(false)
    }
    this.mobileViewSer.mobileView.subscribe(res => {
      this.mobileView = res
  
    }) 
    
   
      this.authServ.isLoggedIn().subscribe(()=>{})
  
   


  }
  ngAfterContentInit(){
   
    
  }

  ngAfterViewInit() {
    setTimeout(this.mainFunc,40)
  
  
    
  }

  offAdmin() {
    this.adminServ.changeMessage(false)

  }
  onAdmin() {
    this.adminServ.changeMessage(true)
    
  }
  mainFunc= ()=> {
  
   
    this.adminServ.messageSource.subscribe((res) => {
      this.adminPanelActive = res;
    });

    
  }

  async logout(){
    await this.authServ.logout().subscribe((res)=>{
     this.authServ.loggedIn.next(false)
    this.sidebarOpen = false

    })
  }

  onselect(message:string){
    this.selected = message
    this.sidebarOpen = false

  }
  navbarOpen(){
    this.sidebarOpen = !this.sidebarOpen
  }


}
