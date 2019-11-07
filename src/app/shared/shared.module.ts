import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FileListComponent} from './file-list/file-list.component';

const sharedComponents = [
  HeaderComponent,
  FileListComponent
];

const sharedModules = [
  CommonModule,
  NgZorroAntdModule,
];

@NgModule({
  declarations: [sharedComponents, ],
  imports: [sharedModules],
  exports: [sharedComponents, sharedModules]
})
export class SharedModule { }
