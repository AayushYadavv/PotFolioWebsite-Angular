import { Component, OnInit } from '@angular/core';
import { ServerCommService} from "../../shared/services/server-comm.service"
import {Certificate} from "../../shared/models/certificate"
import { AuthService} from '../../shared/services/auth.service'
@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  certificates:Certificate[]
  errorMessage:boolean=false
  loading:boolean=false
  
  constructor(private sevComm:ServerCommService,private authServ:AuthService) { }

  ngOnInit(): void {
    this.sevComm.getCerti().subscribe({
      next:res=>{
        this.errorMessage=false
        this.certificates= res
      },
      error:err=>{
        this.errorMessage=true
      }
    })

    this.authServ.waiting.subscribe(res=>{
      this.loading = res
    })
  }
 

}
