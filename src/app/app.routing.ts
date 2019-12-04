import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { PortadaComponent } from './components/portada.component';
import { Resta05Component } from './components/page/resta05/resta05.component';
import { Resta10Component } from './components/page/resta10/resta10.component';
import { Resta20Component } from './components/page/resta20/resta20.component';
import { Resta30Component } from './components/page/resta30/resta30.component';
import { Resta40Component } from './components/page/resta40/resta40.component';
import { Resta50Component } from './components/page/resta50/resta50.component';
import { Resta60Component } from './components/page/resta60/resta60.component';
import { Resta70Component } from './components/page/resta70/resta70.component';
import { Resta80Component } from './components/page/resta80/resta80.component';
import { Resta90Component } from './components/page/resta90/resta90.component';
import { Resta100Component } from './components/page/resta100/resta100.component';
import { Suma05Component } from './components/page/suma05/suma05.component';
import { NivelesComponent } from './components/page/niveles/niveles.component';
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

const routes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'suma', component: Suma05Component },
  { path: 'suma10', component: Suma10Component },
  { path: 'suma20', component: Suma20Component },
  { path: 'suma30', component: Suma30Component },
  { path: 'suma40', component: Suma40Component },
  { path: 'suma50', component: Suma50Component },
  { path: 'suma60', component: Suma60Component },
  { path: 'suma70', component: Suma70Component },
  { path: 'suma80', component: Suma80Component },
  { path: 'suma90', component: Suma90Component },
  { path: 'suma100', component: Suma100Component },
  { path: 'resta', component: Resta05Component },
  { path: 'resta05', component: Resta05Component },
  { path: 'resta10', component: Resta10Component },
  { path: 'resta20', component: Resta20Component },
  { path: 'resta30', component: Resta30Component },
  { path: 'resta40', component: Resta40Component },
  { path: 'resta50', component: Resta50Component },
  { path: 'resta60', component: Resta60Component },
  { path: 'resta70', component: Resta70Component },
  { path: 'resta80', component: Resta80Component },
  { path: 'resta90', component: Resta90Component },
  { path: 'resta100', component: Resta100Component },
  { path: 'niveles', component: NivelesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
