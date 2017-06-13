import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { routing } from './app.routing';

import { NavbarComponent } from './shared/navbar.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ]
})
export class AppModule { }