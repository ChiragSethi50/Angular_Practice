import { Routes } from '@angular/router';
import { ToDoList } from './pages/to-do-list/to-do-list';
import { About } from './pages/About/about';
import { Profile } from './pages/Profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Home } from './pages/home/home';
import { User } from './pages/User/user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'to-do-list', component: ToDoList },
  { path: 'about/:user', component: About }, // setting up of params
  { path: 'profile', component: Profile },
  { path: 'user/:id', component: User },


  // 404 page routing. Should be kept at bottom of all routes,
  { path: '**', component: PageNotFound }, // We can also use 'redirectTo' method to redirect instead of displaying something
];
