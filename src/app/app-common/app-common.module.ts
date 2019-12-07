import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FadeDirective } from './directives/fade.directive';



@NgModule({
  imports: [
    CommonModule,
    AppCommonRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent,FadeDirective],
  exports: [HeaderComponent,FooterComponent,FadeDirective]
})
export class AppCommonModule { }
