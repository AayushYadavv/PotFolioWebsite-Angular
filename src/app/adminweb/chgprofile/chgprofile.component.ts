import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms'
import { ServerCommService } from '../../shared/services/server-comm.service' 
import { tap } from 'rxjs/operators'
@Component({
  selector: 'app-chgprofile',
  templateUrl: './chgprofile.component.html',
  styleUrls: ['./chgprofile.component.css']
})
export class ChgprofileComponent implements OnInit {

  constructor(private serverComm:ServerCommService) { }

  profileForm = new FormGroup({
    file: new FormControl('',[Validators.required]),
    fileSource : new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
  }

  submit(){
    if(!this.profileForm.valid){
      return
    }
    const formData = new FormData();
    formData.append('profile',this.profileForm.get('fileSource').value)
    // console.log("1223",this.profileForm.get('fileSource').value)
    // console.log(formData,this.profileForm)
    this.serverComm.profileUpload(formData).subscribe({
      next:(res)=>{
        this.profileForm.reset();

        if(res){
          window.location.reload()
        alert("Profile Picture Updated !")

        }else{
        this.profileForm.setErrors({'ErrUpload':true})

        }

        
      },
      error:(err)=>{
        console.log(err)
        this.profileForm.reset();

      this.profileForm.setErrors({'anyError':true})

      }
      }
    )

  }
  onfilechange(event:any){
    // console.log(event.target.files)
    if (event.target.files.length>0){
      const file = event.target.files[0]
      this.profileForm.patchValue({
        fileSource:file
      })
    }

  }
}
