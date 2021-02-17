import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrofoodtruckComponent } from './components/registrofoodtruck/registrofoodtruck.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'nuevo_foodtruck', component: RegistrofoodtruckComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
