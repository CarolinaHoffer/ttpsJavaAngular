//---- Angular ----
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ---- Components ----
import { ItemComponent } from './components/sidebar/item/item.component';
import { NavComponent } from './components/sidebar/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { TemplateComponent } from './components/template/template.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

// ---- Material ----

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

//Services
import { AuthService } from './services/authentication.service';

const appRoutes: Routes = [
  {
    path: '/',
    component: AppComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    LoginComponent,
    TemplateComponent,
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
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
