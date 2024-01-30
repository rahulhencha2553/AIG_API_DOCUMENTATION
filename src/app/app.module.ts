import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './DOCUMENTATION-PORTAL/home/home.component';
import { NavbarComponent } from './DOCUMENTATION-PORTAL/nav/navbar/navbar.component';
import { LoginComponent } from './DOCUMENTATION-PORTAL/auth/login/login.component';
import { SignUpComponent } from './DOCUMENTATION-PORTAL/auth/sign-up/sign-up.component';
import { OtpComponent } from './DOCUMENTATION-PORTAL/auth/otp/otp.component';
import { VerifyDetailsComponent } from './DOCUMENTATION-PORTAL/auth/verify-details/verify-details.component';
import { ProfileComponent } from './DOCUMENTATION-PORTAL/profile/profile.component';
import { AccountComponent } from './DOCUMENTATION-PORTAL/account/account.component';
import { DashboardComponent } from './DOCUMENTATION-PORTAL/dashboard/dashboard.component';
import { IntroComponent } from './DOCUMENTATION-PORTAL/intro/intro.component';
import { CreateApiKeyComponent } from './DOCUMENTATION-PORTAL/create-api-key/create-api-key.component';
import { OverviewComponent } from './DOCUMENTATION-PORTAL/overview/overview.component';
import { ApiParametersComponent } from './DOCUMENTATION-PORTAL/api-parameters/api-parameters.component';
import { PlanPriceComponent } from './DOCUMENTATION-PORTAL/plan-price/plan-price.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignUpComponent,
    OtpComponent,
    VerifyDetailsComponent,
    ProfileComponent,
    AccountComponent,
    DashboardComponent,
    IntroComponent,
    CreateApiKeyComponent,
    OverviewComponent,
    ApiParametersComponent,
    PlanPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
