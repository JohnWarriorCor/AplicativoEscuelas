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
import { Suma10Component } from './components/page/suma10/suma10.component';
import { Suma20Component } from './components/page/suma20/suma20.component';
import { Suma30Component } from './components/page/suma30/suma30.component';
import { Suma40Component } from './components/page/suma40/suma40.component';
import { Suma50Component } from './components/page/suma50/suma50.component';
import { Suma60Component } from './components/page/suma60/suma60.component';
import { Suma70Component } from './components/page/suma70/suma70.component';
import { Suma80Component } from './components/page/suma80/suma80.component';
import { Suma90Component } from './components/page/suma90/suma90.component';
import { Suma100Component } from './components/page/suma100/suma100.component';
import { Resta20Component } from './components/page/resta20/resta20.component';
import { Resta10Component } from './components/page/resta10/resta10.component';
import { Resta30Component } from './components/page/resta30/resta30.component';
import { Resta40Component } from './components/page/resta40/resta40.component';
import { Resta50Component } from './components/page/resta50/resta50.component';
import { Resta60Component } from './components/page/resta60/resta60.component';
import { Resta70Component } from './components/page/resta70/resta70.component';
import { Resta80Component } from './components/page/resta80/resta80.component';
import { Resta90Component } from './components/page/resta90/resta90.component';
import { Resta100Component } from './components/page/resta100/resta100.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortadaComponent,
    Resta05Component,
    Suma05Component,
    NivelesComponent,
    Suma10Component,
    Suma20Component,
    Suma30Component,
    Suma40Component,
    Suma50Component,
    Suma60Component,
    Suma70Component,
    Suma80Component,
    Suma90Component,
    Suma100Component,
    Resta20Component,
    Resta10Component,
    Resta30Component,
    Resta40Component,
    Resta50Component,
    Resta60Component,
    Resta70Component,
    Resta80Component,
    Resta90Component,
    Resta100Component

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
