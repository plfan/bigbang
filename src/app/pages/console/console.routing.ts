import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ConsoleHeaderComponent } from './console-header/console-header.component';
import { ConsoleNavbarComponent } from './console-navbar/console-navbar.component';
import { ConsoleComponent } from './console.component';

export const routes: Routes = [
  { path: '', component: ConsoleHeaderComponent, outlet: 'header' },
  { path: '', component: ConsoleNavbarComponent, outlet: 'navbar' },
  {
    path: '',
    component: ConsoleComponent,
    children: [
      { path: '', redirectTo: 'host', pathMatch: 'full' },
      { path: 'host', loadChildren: '../host/host.module#HostModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
