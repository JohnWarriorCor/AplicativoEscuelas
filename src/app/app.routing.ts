import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { PortadaComponent } from './components/portada.component';
import { Resta05Component } from './components/page/resta05/resta05.component';
import { Suma05Component } from './components/page/suma05/suma05.component';
import { NivelesComponent } from './components/page/niveles/niveles.component';
<<<<<<< HEAD
import { Suma10Component } from './components/page/suma10/suma10.component';
=======
import { Suma20Component } from './components/page/suma20/suma20.component';
>>>>>>> a4f6706b0becd5ae724cbb584fb788a4135caee7

const routes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'suma3', component: Suma20Component },
  { path: 'home', component: HomeComponent },
  { path: 'suma', component: Suma05Component },
  { path: 'resta', component: Resta05Component },
  { path: 'niveles', component: NivelesComponent },
  { path: 'suma2', component: Suma10Component },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
