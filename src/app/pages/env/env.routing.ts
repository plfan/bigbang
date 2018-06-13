import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EnvListComponent } from './env-list/env-list.component';
import { EnvHeaderComponent } from './env-header/env-header.component';

export const routes: Routes = [
  { path: '', component: EnvHeaderComponent, outlet: 'header' },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: EnvListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
