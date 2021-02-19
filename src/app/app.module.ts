//---- Angular ----
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing/app-routing.module';

// ---- Components ----
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormTemplateComponent } from './components/formTemplate/formTemplate.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { HomeTemplateComponent } from './components/home/home-template/home-template.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewFoodtruckComponent } from './components/new-foodtruck/new-foodtruck.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FoodtruckDetailComponent } from './components/foodtruck-detail/foodtruck-detail.component';
import { FoodtruckmanagementComponent } from './components/foodtruckmanagement/foodtruckmanagement.component';

// ---- Material ----

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule} from '@angular/material/table';

// ---- Services ----
import { AuthService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { FoodtruckServicesService } from './services/foodtruckServices.service';
import { AuthGuard } from './services/authGuard.service';
import { SessionGuard } from './services/sessionGuard.service';

const appRoutes: Routes = [
  {
    path: '/',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FormTemplateComponent,
    HomeTemplateComponent,
    NavbarComponent,
    ProfileComponent,
    HomepageComponent,
    FoodtruckmanagementComponent,
    NewFoodtruckComponent,
    FoodtruckDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
  ],
  providers: [
    AuthService,
    UserService,
    FoodtruckServicesService,
    AuthGuard,
    SessionGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
