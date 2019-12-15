import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FileListComponent} from './file-list/file-list.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {PostagComponent} from './postag/postag.component';
import {FileSelectComponent} from './file-select/file-select.component';
import {FormsModule} from '@angular/forms';
import {WordCloudComponent} from './word-cloud/word-cloud.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpRequestInterceptor} from './http-request-interceptor'; // use this


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
  declarations: [sharedComponents, WordCloudComponent, ],
  imports: [sharedModules, NgxEchartsModule],
  exports: [sharedComponents, sharedModules, WordCloudComponent, ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}, ]
})
export class SharedModule {
}
