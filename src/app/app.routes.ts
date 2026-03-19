import { Routes } from '@angular/router';
import { ToDoList } from './pages/to-do-list/to-do-list';
import { About } from './pages/About/about';
import { Profile } from './pages/Profile/profile';

export const routes: Routes = [
  { path: 'to-do-list', component: ToDoList },
  { path: 'about', component: About },
  { path: 'profile', component: Profile },
];
