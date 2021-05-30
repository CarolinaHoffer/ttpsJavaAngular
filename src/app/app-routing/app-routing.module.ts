import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from '../components/login/login.component';
import { FormTemplateComponent } from '../components/formTemplate/formTemplate.component';
import { SignupComponent } from '../components/signup/signup.component';
import { HomeTemplateComponent } from '../components/home/home-template/home-template.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { FoodtruckmanagementComponent } from '../components/foodtruckmanagement/foodtruckmanagement.component';
import { NewFoodtruckComponent } from '../components/new-foodtruck/new-foodtruck.component';
import { FoodtruckDetailComponent } from '../components/foodtruck-detail/foodtruck-detail.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

//Servicios
import { AuthGuard } from '../services/authGuard.service';
import { UserIsFoodtrucker } from '../services/userIsFoodtrucker.service'
import { SessionGuard } from '../services/sessionGuard.service';
import { SearchFoodtruckComponent } from '../components/search-foodtruck/search-foodtruck.component';
import { FoodtruckPublicDetailComponent } from '../components/foodtruck-public-detail/foodtruck-public-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'homepage',
        component: HomepageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'searchfoodtruck',
        component: SearchFoodtruckComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'foodtruck/:id',
        component: FoodtruckDetailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'foodtruckView/:id',
        component: FoodtruckPublicDetailComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'foodtruckmanagement',
        component: FoodtruckmanagementComponent,
        canActivate: [AuthGuard, UserIsFoodtrucker],
      },
    ],
  },
  {
    path: 'new',
    component: FormTemplateComponent,
    children: [
      { path: 'user', component: SignupComponent, canActivate: [SessionGuard] },
      {
        path: 'foodtruck',
        component: NewFoodtruckComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
