import { Component, OnInit,Input,Output , EventEmitter } from '@angular/core';
import { Projects,Project } from "../../shared/models/projects"
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
@Input() project :Project=Projects[0]
@Input() adminFunc :boolean=false
@Output() delEven = new EventEmitter<number>()
ImgLink 
  constructor() { }

  ngOnInit(): void {
  this.ImgLink = this.project.projectPicUrl
  }

  deleteProj(){{
    this.delEven.emit(this.project.projectID)
  }}
}
