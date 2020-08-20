import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminwebRoutingModule } from './adminweb-routing.module';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ChgprofileComponent } from './chgprofile/chgprofile.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { LoginMModule} from '../../app/login-m/login-m.module';
import { AddblogComponent } from './addblog/addblog.component';
import { DelblogComponent } from './delblog/delblog.component';
import { AddprojComponent } from './addproj/addproj.component';
import { DelprojComponent } from './delproj/delproj.component';
import { DelcertiComponent } from './delcerti/delcerti.component';
import { AddcertiComponent } from './addcerti/addcerti.component'

@NgModule({
  declarations: [AdminhomeComponent, ChgprofileComponent,  ViewFeedbackComponent, AddblogComponent, DelblogComponent, AddprojComponent, DelprojComponent, DelcertiComponent, AddcertiComponent],
  imports: [
    CommonModule,
    AdminwebRoutingModule,
    LoginMModule
  ],
  
})
export class AdminwebModule { }
