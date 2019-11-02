import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import { FileListComponent } from './file-list/file-list.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [WelcomeComponent, FileListComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
