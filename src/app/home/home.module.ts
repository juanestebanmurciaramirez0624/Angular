import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MenuNavComponent } from '../menu-nav/menu-nav.component';
import { BodyWebComponentsComponent } from '../body-web-components/body-web-components.component';



@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    BodyWebComponentsComponent
  ],
  exports:[
    HomeComponent,
    MenuNavComponent,
    BodyWebComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
