import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { PortadaComponent } from './components/portada.component';
import { Resta05Component } from './components/page/resta05/resta05.component';
import { Suma05Component } from './components/page/suma05/suma05.component';
import { NivelesComponent } from './components/page/niveles/niveles.component';
import { Suma10Component } from './components/page/suma10/suma10.component';

const routes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'suma', component: Suma05Component },
  { path: 'resta', component: Resta05Component },
  { path: 'niveles', component: NivelesComponent },
  { path: 'suma2', component: Suma10Component },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
