import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserwebRoutingModule } from './userweb-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificateComponent } from './certificate/certificate.component';
import { TechnewsComponent } from './technews/technews.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [HomeComponent, ProjectsComponent, CertificateComponent, TechnewsComponent, FeedbackComponent, BlogsComponent],
  imports: [
    CommonModule,
    UserwebRoutingModule
  ],
  exports:[
    BlogsComponent
  ]

})
export class UserwebModule { }
