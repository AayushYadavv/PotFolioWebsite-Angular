import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms'
import { ServerCommService } from '../../shared/services/server-comm.service'

@Component({
  selector: 'app-addcerti',
  templateUrl: './addcerti.component.html',
  styleUrls: ['./addcerti.component.css']
})
export class AddcertiComponent implements OnInit {
  certificateForm = new FormGroup({
    certiName :new FormControl('',[Validators.required]),
    certificateImage: new FormControl('',[Validators.required]),
    about : new FormControl('',[Validators.required]),
    url:new FormControl('',[Validators.required])
  })
    constructor(private serverComm:ServerCommService) { }
  
    ngOnInit(): void {
    }

    filechange(event:any){
      if(event.target.files.length>0){
        console.log("file selected")
        this.certificateForm.patchValue({
          certificateImage:event.target.files[0]
        })
      }else{
        this.certificateForm.patchValue({
          certificateImage:""
        })
      }
    }
  
    submit(){
   

      if(!this.certificateForm.valid){
 

        return
      }

      const certiFormdata= new FormData()
      certiFormdata.append('certiName',this.certificateForm.get('certiName').value)
      certiFormdata.append('certificate',this.certificateForm.get('certificateImage').value)
      certiFormdata.append('about',this.certificateForm.get('about').value)
      certiFormdata.append('url',this.certificateForm.get('url').value)

      this.serverComm.addCerti(certiFormdata).subscribe({
        next:(res)=>{
          if(res){
            alert("Certificate Succesfully Uploaded")
            this.certificateForm.reset()
          }else{
            this.certificateForm.setErrors({'ErrUpload':true})
          }
        },
        error:(err)=>{
          this.certificateForm.reset()
          this.certificateForm.setErrors({'anyError':true})
          
          
        }
        
        
      })

    }
  }