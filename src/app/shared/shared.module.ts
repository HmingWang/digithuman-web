import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FileListComponent} from './file-list/file-list.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import { PostagComponent } from './postag/postag.component';
import { FileSelectComponent } from './file-select/file-select.component';
import {FormsModule} from '@angular/forms';

const sharedComponents = [
  HeaderComponent,
  FileListComponent,
  FileUploadComponent,
  PostagComponent,
  FileSelectComponent,
];

const sharedModules = [
  FormsModule,
  CommonModule,
  NgZorroAntdModule,
];

@NgModule({
  declarations: [sharedComponents, ],
  imports: [sharedModules ],
  exports: [sharedComponents, sharedModules, ]
})
export class SharedModule { }
