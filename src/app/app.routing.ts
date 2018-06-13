import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'env', pathMatch: 'full' },
  { path: 'env', loadChildren: './pages/env/env.module#EnvModule' },
  { path: 'console', loadChildren: './pages/console/console.module#ConsoleModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
