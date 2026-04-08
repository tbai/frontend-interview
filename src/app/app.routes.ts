import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'venue-dashboard',
    loadComponent: () =>
      import('./exercises/venue-dashboard/venue-dashboard').then(
        (m) => m.VenueDashboard
      ),
  },
  {
    path: 'price-calculator',
    loadComponent: () =>
      import('./exercises/price-calculator/price-calculator-page').then(
        (m) => m.PriceCalculatorPage
      ),
  },
];
