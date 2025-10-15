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
    path: 'forEach',
    loadComponent: () => import('./pages/forEach-page/forEach-page.component'),
    title: 'Método forEach',
  },
  {
    path: 'find',
    loadComponent: () => import('./pages/find-page/find-page.component'),
    title: 'Método find',
  },
  {
    path: 'sort',
    loadComponent: () => import('./pages/sort-page/sort-page.component'),
    title: 'Método sort',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
