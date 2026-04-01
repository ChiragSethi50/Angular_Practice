import { Routes } from '@angular/router';
import { ToDoList } from './pages/to-do-list/to-do-list';
import { About } from './pages/About/about';
import { Profile } from './pages/Profile/profile';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Home } from './pages/home/home';
import { User } from './pages/User/user';
import { Settings } from './pages/User/settings/settings';
import { UserProfile } from './pages/User/user-profile/user-profile';
import { PersonalSettings } from './pages/User/settings/personal-settings/personal-settings';
import { PublicSettings } from './pages/User/settings/public-settings/public-settings';
import { Resources } from './pages/resources/resources';
import { Forms } from './pages/forms/forms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'to-do-list', component: ToDoList },
  { path: 'about/:user', component: About }, // setting up of params
  { path: 'profile', component: Profile },
  {
    path: 'user/:id',
    component: User,
    children: [
      { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
      {
        path: 'settings',
        // component: Settings,
        loadComponent: () => import('./pages/User/settings/settings').then((c) => c.Settings),
        children: [
          {
            path: 'personal',
            // component: PersonalSettings,    Instead of normal component Appliying Lazy Loading
            loadComponent: () =>
              import('./pages/User/settings/personal-settings/personal-settings').then(
                (c) => c.PersonalSettings,
              ),
          },
          {
            path: 'public',
            component: PublicSettings,
          },
        ],
      },
      {
        path: 'user-profile',
        component: UserProfile,
      },
    ],
  },
  { path: 'resources', component: Resources },
  { path: 'forms', component: Forms },

  // 404 page routing. Should be kept at bottom of all routes,
  { path: '**', component: PageNotFound }, // We can also use 'redirectTo' method to redirect instead of displaying something
];
