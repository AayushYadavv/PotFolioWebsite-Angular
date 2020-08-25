import { Component, OnInit } from '@angular/core';
import { ServerCommService } from "../../shared/services/server-comm.service"
import { AuthService } from "../../shared/services/auth.service"
import { Project } from "../../shared/models/projects";
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations:[   trigger('listAnimation', [
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
export class ProjectsComponent implements OnInit {

  constructor(private servComm:ServerCommService,private authServ:AuthService) { }
  getProjects(){
    this.servComm.getProjects().subscribe({
      next:res=>{
        this.projects = res
      }
    })
  }
  projects:Project[]
  loading:boolean=false
  ngOnInit(): void {
    this.authServ.waiting.subscribe(res=>{
      this.loading = res
    })
    this.getProjects() 
  }

}
