import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'

import { LoginMRoutingModule } from './login-m-routing.module';

import { LoginCompComponent } from './login-comp/login-comp.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { BlogCompComponent } from './blog-comp/blog-comp.component';
import { AccordianComponent } from './accordian/accordian.component';
import { TabchildnavComponent } from './tabchildnav/tabchildnav.component';


@NgModule({
  declarations: [LoginCompComponent, InputCompComponent, BlogCompComponent, AccordianComponent, TabchildnavComponent],
  imports: [
    CommonModule,
    LoginMRoutingModule,
    ReactiveFormsModule
  
  ],
  exports:[InputCompComponent,BlogCompComponent,AccordianComponent,TabchildnavComponent]
})
export class LoginMModule { }
