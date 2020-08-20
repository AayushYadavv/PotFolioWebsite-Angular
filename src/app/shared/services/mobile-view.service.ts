import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MobileViewService {
mobileView = new BehaviorSubject(false)


  constructor() { 
  window.addEventListener('resize',(event)=>{
      if(window.innerWidth<900){
        this.mobileView.next(true)
      }else{
        this.mobileView.next(false)
      }
    })
  }
  change(val:boolean){
    this.mobileView.next(val)
  }

 

}
