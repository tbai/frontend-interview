import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'venue-dashboard',
    loadComponent: () =>
      import('./exercises/venue-dashboard/venue-dashboard').then(
        (m) => m.VenueDashboard
      ),
  },
];
