import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {CommonModule} from '@angular/common';

const sharedComponents = [
  HeaderComponent
];

@NgModule({
  declarations: [sharedComponents],
  imports: [CommonModule],
  exports: [sharedComponents]
})
export class SharedModule { }
