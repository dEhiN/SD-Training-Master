// App.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: '**',
    component: NotFound,
  },
  // if needed to send user to home page on wildcard path
  // {
  //     path:'**',
  //     component:Home
  // }
];
