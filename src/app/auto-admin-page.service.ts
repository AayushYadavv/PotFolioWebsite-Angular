import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoAdminPageService {
   messageSource = new BehaviorSubject(false);




  constructor() { }

  changeMessage(msg:boolean){
    this.messageSource.next(msg)
  }
}
