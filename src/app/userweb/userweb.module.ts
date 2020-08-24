import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { UserwebRoutingModule } from './userweb-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificateComponent } from './certificate/certificate.component';
import { TechnewsComponent } from './technews/technews.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogsComponent } from './blogs/blogs.component';
import { LoginMModule} from './../login-m/login-m.module'


@NgModule({
  declarations: [HomeComponent, ProjectsComponent, CertificateComponent, TechnewsComponent, FeedbackComponent, BlogsComponent],
  imports: [
    CommonModule,
    UserwebRoutingModule,
    LoginMModule,
    ReactiveFormsModule
  ],
  exports:[
    BlogsComponent
  ]

})
export class UserwebModule { }
