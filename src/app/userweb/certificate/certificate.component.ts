import { Component, OnInit } from '@angular/core';
import { ServerCommService} from "../../shared/services/server-comm.service"
import {Certificate} from "../../shared/models/certificate"
import { AuthService} from '../../shared/services/auth.service'
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css'],
  animations: [   trigger('listAnimation', [
    transition('* => *', [

      query(':enter', style({ opacity: 0 }), {optional: true}),

      query(':enter', stagger('100ms', [
        animate('1s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateY(-25px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
        ]))]), {optional: true})
    ])
  ])]
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
