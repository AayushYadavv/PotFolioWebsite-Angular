import { Component, OnInit, AfterViewInit ,Renderer2, AfterContentInit } from '@angular/core';
import { AutoAdminPageService } from './auto-admin-page.service';
import { MobileViewService } from './shared/services/mobile-view.service'
import { AuthService } from './shared/services/auth.service'
import { Router} from '@angular/router'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { BehaviorSubject } from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('menu', [
      transition('* => *', [
        query('.item', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.item', stagger('200ms', [
          animate('800ms 0.05s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.item', [
          animate(1000, style('*'))
        ])
        
      ])
    ]),
    trigger('mobmenu', [
      transition('* => *', [
        query('.xx', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.xx', stagger('200ms', [
          animate('800ms 0.05s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.xx', [
          animate(1000, style('*'))
        ])
        
      ])
    ]),
    trigger('explainerAnim', [
      transition('* => *', [
        query('.box', style({ opacity: 0, transform: 'translateX(-40px)' })),

        query('.box', stagger('500ms', [
          animate('800ms 0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.box', [
          animate(1000, style('*'))
        ])
        
      ])
    ]),
    trigger('upexplainerAnim', [
      transition('* => *', [
        query('.profile', style({ opacity: 0, transform: 'translateY(-40px)' })),

        query('.profile', stagger('100ms', [
          animate('800ms 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),

        query('.profile', [
          animate(1000, style('*'))
        ])
        
      ])
    ]),
    trigger('downexplainerAnim', [
      transition('* => *', [
        query('.main', style({ opacity: 0, transform: 'translateY(40px)' })),

        query('.main', stagger('500ms', [
          animate('800ms 0.3s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
        ])),

        query('.main', [
          animate(1000, style('*'))
        ])
        
      ])
    ]),
    trigger('revexplainerAnim', [
      transition('* => *', [
        query('.box', style({ opacity: 0, transform: 'translateX(40px)' })),

        query('.box', stagger('100ms', [
          animate('800ms 0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

        query('.box', [
          animate(500, style('*'))
        ])
        
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit,OnInit,AfterContentInit{
  particlesOptions = {
    particles: {
      color: {
        value: [ '#ff0000', '#0000ff' ]
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 5
      }
    }
  };
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
