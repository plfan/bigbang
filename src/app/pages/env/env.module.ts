import { NgModule } from '@angular/core';
import { EnvListComponent } from './env-list/env-list.component';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './env.routing';
import { EnvHeaderComponent } from './env-header/env-header.component';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    EnvListComponent,
    EnvHeaderComponent
  ]
})
export class EnvModule { }
