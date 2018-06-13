import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { SharedCommonModule } from './shared-common.module';

@NgModule({
  imports: [
    SharedLibsModule,
    SharedCommonModule
  ],
  exports: [
    SharedCommonModule,
    SharedLibsModule
  ],
  declarations: []
})
export class SharedModule { }
