import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule.forRoot(),
  ],
  exports: [
    NgbModule
  ]
})
export class SharedLibsModule { }
