import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {SignupComponent} from './signup/signup.component';
import { PatientdetailComponent } from './detail/patientdetail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignupComponent,
    PatientdetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [{path:"", component: LandingComponent},
      {path:"register", component: SignupComponent},
      {path:"view", component: PatientdetailComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
