import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AutoAdminPageService } from '../../auto-admin-page.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {
  loading:boolean=false
  loggedInVal: boolean;
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
  });
  constructor(
    private autoAdminServ: AutoAdminPageService,
    private authServ: AuthService,
    private router: Router,
    private adminServ: AutoAdminPageService
  ) {}

  ngOnInit() {
    this.authServ.waiting.subscribe(res=>{
      this.loading = res
    })
    this.adminServ.changeMessage(true);
    this.authServ.loggedIn.subscribe((res) => {
      // console.log('service', res);
      this.loggedInVal = res;
    });
    this.authServ.isLoggedIn().subscribe(
     {next:res=>{
      this.loggedInVal = res.isLoggedIn;

     },
    error:err=>{
      this.loggedInVal=false
    }}
    )
  }

  ngAfterViewInit() {
   
  }


  submit() {
    if (!this.loginForm.valid) {

      return;
    }
    
    this.authServ.login(this.loginForm.value).subscribe({
      next: (res) => {
        // console.log('444', res);
        if (res.flag) {
          this.authServ.loggedIn.next(true);

          this.router.navigateByUrl('/admin');
        } else {
          this.loginForm.reset();

          if(res.message=='ASI'){
          this.loginForm.setErrors({ 'ASI': true });

          }
          if(res.message=='INP'){
          this.loginForm.setErrors({ 'Wrong Credentials': true });

          }


          this.authServ.loggedIn.next(false);
        }
      },
      error: (err) => {
      
        if (!err.status) {
          
          this.loginForm.reset();
          this.loginForm.setErrors({ 'Unable to login': true });
        }
      },
    });
  }
}
