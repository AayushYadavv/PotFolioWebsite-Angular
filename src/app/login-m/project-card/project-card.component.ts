import { Component, OnInit,Input,Output , EventEmitter } from '@angular/core';
import { Projects,Project } from "../../shared/models/projects"
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  })

export class ProjectCardComponent implements OnInit {
@Input() project :Project=Projects[0]
@Input() adminFunc :boolean=false
@Output() delEven = new EventEmitter<number>()
ImgLink 
sourceCode:boolean=false
hostedurl:boolean=false
  constructor() { }

  ngOnInit(): void {
  this.ImgLink = this.project.projectPicUrl
  if(this.project.projectUrl==='---'){
    this.hostedurl=false;
  }else{
    this.hostedurl=true
  }

  if(this.project.sourceCodeUrl==="Private Project"){
    this.sourceCode=false
  }else{
    this.sourceCode=true
  }
  }

  deleteProj(){{
    this.delEven.emit(this.project.projectID)
  }}
}
