import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms'
import { ServerCommService} from "../../shared/services/server-comm.service"
@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.component.html',
  styleUrls: ['./addproj.component.css']
})
export class AddprojComponent implements OnInit {
  projectData: String = ''
projectForm = new FormGroup({
  projectName :new FormControl('',[Validators.required]),
  projectPicUrl: new FormControl('',[Validators.required]),
  projectSourceUrl:new FormControl('',[Validators.required]),
  projectUrl:new FormControl('',[Validators.required]),
  about : new FormControl('',[Validators.required])
})
  constructor(private servComm:ServerCommService) { }

  ngOnInit(): void {
  }


 submit(){
  if(!this.projectForm.valid){
    return  
  }
  console.log(this.projectData);

  
  this.servComm.addProject(this.projectForm.value).subscribe({
    next:res=>{
      this.projectForm.reset()
      if(res){
        alert("Project Posted !")

      }else{
      this.projectForm.setErrors({'ErrUpload':true})

      }

      
    },
    error:(err)=>{
      console.log(err)
      this.projectForm.reset();

    this.projectForm.setErrors({'anyError':true})

    }}
  )
 
  
 
}
}
