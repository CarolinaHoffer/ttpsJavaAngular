import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Components
import { ItemComponent } from './components/sidebar/item/item.component';
import { NavComponent } from './components/sidebar/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContentInicioComponent } from './components/content-inicio/content-inicio.component';
import { ContentComponent } from './components/content/content.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatGridListModule} from '@angular/material/grid-list';
import { MatListModule } from "@angular/material/list";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ItemComponent,
    InicioComponent,
    ContentInicioComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
