import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'user',
    title: 'User Page',
    loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent)
  },
  {
    path: '**', redirectTo: ''
  }
];