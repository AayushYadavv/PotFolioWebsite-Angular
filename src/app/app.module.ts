import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InViewportModule } from 'ng-in-viewport';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';
import { LoginMModule } from './login-m/login-m.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInceptor}  from "./shared/http-inceptor"
import { AccessDComponent } from './access-d/access-d.component';
import { LoggedoutComponent } from './loggedout/loggedout.component';

@NgModule({
  declarations: [AppComponent, ProfileCardComponent, AccessDComponent, LoggedoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginMModule,
    InViewportModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:HttpInceptor,multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
