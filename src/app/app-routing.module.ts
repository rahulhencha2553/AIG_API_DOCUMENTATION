import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './DOCUMENTATION-PORTAL/home/home.component';
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
import { VerificationPendingComponent } from './DOCUMENTATION-PORTAL/auth/verification-pending/verification-pending.component';
import { VerificationVerifiedComponent } from './DOCUMENTATION-PORTAL/auth/verification-verified/verification-verified.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'otp',
    component: OtpComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'verify-details',
        component: VerifyDetailsComponent,
      },
      {
        path: 'intro',
        component: IntroComponent,
      },
      {
        path:'create-api-key',
        component:CreateApiKeyComponent
      },
      {
        path:'overview',
        component:OverviewComponent
      },
      {
        path:'api-parameters',component:ApiParametersComponent
      },
      {
        path:'plan-price',component:PlanPriceComponent
      },
      {
        path:'pending',component:VerificationPendingComponent
      },
      {
        path:'verified',component:VerificationVerifiedComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
