import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { APP_ROUTING } from './app.routing';
import { PortadaComponent } from './components/portada.component';
import { Resta05Component } from './components/page/resta05/resta05.component';
import { NivelesComponent } from './components/page/niveles/niveles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Suma05Component } from './components/page/suma05/suma05.component';
<<<<<<< HEAD
import { Suma10Component } from './components/page/suma10/suma10.component';
=======
import { Suma20Component } from './components/page/suma20/suma20.component';
>>>>>>> a4f6706b0becd5ae724cbb584fb788a4135caee7


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortadaComponent,
    Resta05Component,
    Suma05Component,
    NivelesComponent,
<<<<<<< HEAD
    Suma10Component
=======
    Suma20Component
>>>>>>> a4f6706b0becd5ae724cbb584fb788a4135caee7
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
