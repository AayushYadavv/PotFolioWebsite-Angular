import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../app/guards/auth.guard';
import { LoginGuard } from '../app/guards/login.guard';
import { AuthDatabaseGuard } from '../app/guards/auth-database.guard'
import { AccessDComponent } from './access-d/access-d.component';
import { LoggedoutComponent} from './loggedout/loggedout.component'


const routes: Routes = [
  { path: 'login',loadChildren:()=>import('../app/login-m/login-m.module').then(m=>{
    return m.LoginMModule
  }), canLoad: [LoginGuard] },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/adminweb/adminweb.module').then((m) => {
        return m.AdminwebModule;
      }),
    canLoad: [AuthGuard],
  },{
    path:"",loadChildren:()=>import('./userweb/userweb.module').then(m=>{
      return m.UserwebModule
    })
  },
  {path:'logout',component:LoggedoutComponent},
  {path:"**",component:AccessDComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
