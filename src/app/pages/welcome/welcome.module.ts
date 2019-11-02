import { NgModule } from '@angular/core';
import {WelcomeComponent} from './welcome.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule
  ]
})
export class WelcomeModule { }
