import { Component, OnInit } from '@angular/core';
import { ServerCommService } from "../../shared/services/server-comm.service"
import { AuthService } from "../../shared/services/auth.service"
import { Project } from "../../shared/models/projects";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
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
