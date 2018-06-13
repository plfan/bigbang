import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleHeaderComponent } from './console-header/console-header.component';
import { ConsoleNavbarComponent } from './console-navbar/console-navbar.component';
import { ConsoleComponent } from './console.component';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './console.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    ConsoleHeaderComponent,
    ConsoleNavbarComponent,
    ConsoleComponent
  ]
})
export class ConsoleModule { }
