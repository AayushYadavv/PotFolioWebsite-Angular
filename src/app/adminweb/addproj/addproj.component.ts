import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-addproj',
  templateUrl: './addproj.component.html',
  styleUrls: ['./addproj.component.css']
})
export class AddprojComponent implements OnInit {
certificateForm = new FormGroup({
  certiName :new FormControl('',[Validators.required]),
  certificateImage: new FormControl('',[Validators.required]),
  about : new FormControl('',[Validators.required])
})
  constructor() { }

  ngOnInit(): void {
  }

}
