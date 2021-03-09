import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class PwaServService {
  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event=>{
      if(swUpdate.checkForUpdate()){
        window.location.reload()
      }
    })
    
  }
}
