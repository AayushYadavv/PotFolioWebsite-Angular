import { BrowserModule } from '@angular/platform-browser';
import {NgParticlesModule} from "ng-particles";
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
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, ProfileCardComponent, AccessDComponent, LoggedoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgParticlesModule,
    LoginMModule,
    InViewportModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],

  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:HttpInceptor,multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
