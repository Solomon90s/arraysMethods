import { Routes } from '@angular/router';
import { FilterPageComponent } from '@pages/filter-page/filter-page.component';
import { HomePageComponent } from '@pages/home-page/home-page.component';
import { MapPageComponent } from '@pages/map-page/map-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'map',
    component: MapPageComponent,
  },
  {
    path: 'filter',
    component: FilterPageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
