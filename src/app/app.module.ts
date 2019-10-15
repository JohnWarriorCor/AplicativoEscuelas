import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { APP_ROUTING } from './app.routing';
import { PortadaComponent } from './components/portada.component';
import { Resta05Component } from './components/page/resta05/resta05.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortadaComponent,
    Resta05Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
