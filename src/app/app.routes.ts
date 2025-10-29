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
    path: 'some',
    loadComponent: () => import('./pages/some-page/some-page.component'),
    title: 'Método some',
  },
  {
    path: 'every',
    loadComponent: () => import('./pages/every-page/every-page.component'),
    title: 'Método every',
  },
  {
    path: 'concat',
    loadComponent: () => import('./pages/concat-page/concat-page.component'),
    title: 'Método concat',
  },
  {
    path: 'includes',
    loadComponent: () => import('./pages/includes-page/includes-page'),
    title: 'Método includes',
  },
  {
    path: 'join',
    loadComponent: () => import('./pages/join-page/join-page.component'),
    title: 'Método join',
  },
  {
    path: 'reduce',
    loadComponent: () => import('./pages/reduce-page/reduce-page.component'),
    title: 'Método reduce',
  },
  {
    path: 'indexOf',
    loadComponent: () => import('./pages/indexOf-page/indexOf-page.component'),
    title: 'Método indexOf',
  },
  {
    path: 'findIndex',
    loadComponent: () =>
      import('./pages/findIndex-page/findIndex-page.component'),
    title: 'Método findIndex',
  },
  {
    path: 'fill',
    loadComponent: () => import('./pages/fill-page/fill-page.component'),
    title: 'Método fill',
  },
  {
    path: 'push',
    loadComponent: () => import('./pages/push-page/push-page.component'),
    title: 'Método push',
  },
  {
    path: 'pop',
    loadComponent: () => import('./pages/pop-page/pop-page.component'),
    title: 'Método pop',
  },
  {
    path: 'shift',
    loadComponent: () => import('./pages/shift-page/shift-page.component'),
    title: 'Método shift',
  },
  {
    path: 'unshift',
    loadComponent: () => import('./pages/unshift-page/unshift-page.component'),
    title: 'Método unshift',
  },
  {
    path: 'slice',
    loadComponent: () => import('./pages/slice-page/slice-page.component'),
    title: 'Método slice',
  },
  {
    path: 'reverse',
    loadComponent: () => import('./pages/reverse-page/reverse-page.component'),
    title: 'Método reverse',
  },
  {
    path: 'splice',
    loadComponent: () => import('./pages/splice-page/splice-page.component'),
    title: 'Método splice',
  },
  {
    path: 'lastIndexOf',
    loadComponent: () =>
      import('./pages/lastIndexOf-page/lastIndexOf-page.component'),
    title: 'Método lastIndexOf',
  },
  {
    path: 'flat',
    loadComponent: () => import('./pages/flat-page/flat-page.component'),
    title: 'Método flat',
  },
  {
    path: 'isArray',
    loadComponent: () => import('./pages/isArray-page/isArray-page.component'),
    title: 'Método isArray',
  },
  {
    path: 'from',
    loadComponent: () => import('./pages/from-page/from-page.component'),
    title: 'Método from',
  },
  {
    path: 'toReversed',
    loadComponent: () =>
      import('./pages/toReversed-page/toReversed-page.component'),
    title: 'Método toReversed',
  },
  {
    path: 'toSorted',
    loadComponent: () =>
      import('./pages/toSorted-page/toSorted-page.component'),
    title: 'Método toSorted',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
