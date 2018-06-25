import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { ThemeComponent } from './theme/theme.component';
import { LanguageComponent } from './language/language.component';

@NgModule({
  imports: [
    SharedLibsModule
  ],
  exports: [
    SharedLibsModule,
    ThemeComponent,
    LanguageComponent
  ],
  declarations: [
    ThemeComponent,
    LanguageComponent
  ]
})
export class SharedCommonModule { }
