import { Component, OnInit } from '@angular/core';
import { ServerCommService} from "../../shared/services/server-comm.service"
import {Certificate} from "../../shared/models/certificate"

@Component({
  selector: 'app-delcerti',
  templateUrl: './delcerti.component.html',
  styleUrls: ['./delcerti.component.css']
})
export class DelcertiComponent implements OnInit {

  certificates:Certificate[]
  getcerti(){
    this.sevComm.getCerti().subscribe({
      next:res=>{
        this.errorMessage=false
        this.certificates= res
      },
      error:err=>{
        this.errorMessage=true
      }
    })
  }
  errorMessage:boolean=false
  
  constructor(private sevComm:ServerCommService) { }

  ngOnInit(): void {
    this.getcerti()
  }
 
deleteCerti(event:any){
this.sevComm.delCerti(event).subscribe({
  next:res=>{
    if(res){
      alert("Certificate Deleted !")
      this.getcerti()
    }else{
      alert("Unable to Delete !")
    }
    
   
  }
})


}
}

