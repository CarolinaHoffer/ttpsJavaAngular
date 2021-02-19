import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from '../components/login/login.component';
import { FormTemplateComponent } from '../components/formTemplate/formTemplate.component';
import { SignupComponent } from '../components/signup/signup.component';
import { HomeTemplateComponent } from '../components/home/home-template/home-template.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { NewFoodtruckComponent } from '../components/new-foodtruck/new-foodtruck.component';
import { FoodtruckDetailComponent } from '../components/foodtruck-detail/foodtruck-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'foodtruck/:id', component: FoodtruckDetailComponent },
    ],
  },
  {
    path: 'new',
    component: FormTemplateComponent,
    children: [
      { path: 'user', component: SignupComponent },
      { path: 'foodtruck', component: NewFoodtruckComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
