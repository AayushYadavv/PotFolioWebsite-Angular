import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'

import { LoginMRoutingModule } from './login-m-routing.module';

import { LoginCompComponent } from './login-comp/login-comp.component';
import { InputCompComponent } from './input-comp/input-comp.component';
import { BlogCompComponent } from './blog-comp/blog-comp.component';
import { AccordianComponent } from './accordian/accordian.component';
import { TabchildnavComponent } from './tabchildnav/tabchildnav.component';
import { CertiCardComponent } from './certi-card/certi-card.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NewSideCardComponent } from './new-side-card/new-side-card.component';


@NgModule({
  declarations: [LoginCompComponent ,InputCompComponent, BlogCompComponent, AccordianComponent, TabchildnavComponent, CertiCardComponent, ProjectCardComponent, NewSideCardComponent],
  imports: [
    CommonModule,
    LoginMRoutingModule,
    ReactiveFormsModule
  
  ],
 
  exports:[InputCompComponent,NewSideCardComponent,ProjectCardComponent,BlogCompComponent,AccordianComponent,TabchildnavComponent,CertiCardComponent]
  
})
export class LoginMModule { }
