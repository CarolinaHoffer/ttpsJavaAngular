import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from '../components/login/login.component';
import { FormTemplateComponent } from '../components/formTemplate/formTemplate.component';
import { SignupComponent } from '../components/signup/signup.component';
import { HomeTemplateComponent } from '../components/home/home-template/home-template.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [{ path: 'profile', component: ProfileComponent }, {path:'homepage', component: HomepageComponent}]
  },
  {
    path: 'new',
    component: FormTemplateComponent,
    children: [{ path: 'user', component: SignupComponent }],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
