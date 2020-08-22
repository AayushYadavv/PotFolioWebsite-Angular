import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AddblogComponent } from './addblog/addblog.component'
import { DelblogComponent} from './delblog/delblog.component'
import { AddcertiComponent} from './addcerti/addcerti.component'
import { DelcertiComponent} from './delcerti/delcerti.component'
import { AddprojComponent } from './addproj/addproj.component'
import { DelprojComponent } from './delproj/delproj.component'
import { ChgprofileComponent} from './chgprofile/chgprofile.component'

const routes: Routes = [
  {path:'',component:AdminhomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminwebRoutingModule {}
