import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from '../components/login/login.component';
import { TemplateComponent } from '../components/template/template.component';

const appRoutes: Routes = [
  { path: 'new', component: TemplateComponent, children: [] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
