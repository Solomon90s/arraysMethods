import { Routes } from '@angular/router';
import { HomePageComponent } from '@pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    title: 'Home Page',
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map-page/map-page.component'),
    title: 'Método map',
  },
  {
    path: 'filter',
    loadComponent: () => import('./pages/filter-page/filter-page.component'),
    title: 'Método filter',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
