import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostListComponent } from './host-list/host-list.component';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './host.routing';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [HostListComponent]
})
export class HostModule { }
