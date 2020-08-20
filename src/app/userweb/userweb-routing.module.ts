import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificateComponent } from './certificate/certificate.component';
import { TechnewsComponent } from './technews/technews.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"certificate",component:CertificateComponent},
  {path:"technews",component:TechnewsComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"blogs",component:BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserwebRoutingModule { }
