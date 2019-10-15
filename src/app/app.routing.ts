import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { PortadaComponent } from './components/portada.component';
import { Resta05Component } from './components/page/resta05/resta05.component';

const routes: Routes = [
  { path: 'portada', component: PortadaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resta', component: Resta05Component },
  { path: '**', pathMatch: 'full', redirectTo: 'portada' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
