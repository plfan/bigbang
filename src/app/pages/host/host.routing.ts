import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HostListComponent } from './host-list/host-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: 'list', component: HostListComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
