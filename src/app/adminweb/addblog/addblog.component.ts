import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators } from '@angular/forms'
import { ServerCommService} from '../../shared/services/server-comm.service'
@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {
blogForm = new FormGroup({
  content: new FormControl('',[Validators.required,Validators.minLength(25)])
})
  constructor(private serverCom:ServerCommService) { }

  ngOnInit(): void {
  }

  submit(){
    if(!this.blogForm.valid){
      return
    }
    this.serverCom.blogUpload(this.blogForm.value).subscribe(
      {next:(res)=>{
        this.blogForm.reset();

        if(res){
         
        alert("Blog Posted !")

        }else{
        this.blogForm.setErrors({'ErrUpload':true})

        }

        
      },
      error:(err)=>{
        console.log(err)
        this.blogForm.reset();

      this.blogForm.setErrors({'anyError':true})

      }}
    )
  }

}
