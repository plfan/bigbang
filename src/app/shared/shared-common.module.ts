import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';

@NgModule({
  imports: [
    SharedLibsModule
  ],
  exports: [
    SharedLibsModule
  ],
  declarations: []
})
export class SharedCommonModule { }
