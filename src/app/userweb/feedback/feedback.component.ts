import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators  } from "@angular/forms";
import { AuthService } from "../../shared/services/auth.service";
import { ServerCommService} from "../../shared/services/server-comm.service"
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private authServ:AuthService,private servComm:ServerCommService) { }
  loading:boolean=false
  feedbackForm = new FormGroup({
  name: new FormControl("",[Validators.required]),
  email: new FormControl(" ",[Validators.required]),
  feedback: new FormControl(" ",[Validators.required])
  })
  ngOnInit(): void {
    this.authServ.waiting.subscribe(res=>{
      this.loading = res
    })
  }
submit(){
  if(!this.feedbackForm.valid){
    
    
    return
  }
 this.servComm.sendFeedback(this.feedbackForm.value).subscribe({
   next:res=>{
    this.feedbackForm.reset();

        if(res){
         
        alert("Thanks For the feedback!")

        }else{
        this.feedbackForm.setErrors({'ErrUpload':true})

        }

        
      },
      error:(err)=>{
        console.log(err)
        this.feedbackForm.reset();

      this.feedbackForm.setErrors({'anyError':true})

      }}
    )
  }

}