import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {FileListComponent} from './file-list/file-list.component';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {PostagComponent} from './postag/postag.component';
import {FileSelectComponent} from './file-select/file-select.component';
import {FormsModule} from '@angular/forms';
import {WordCloudComponent} from './word-cloud/word-cloud.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpRequestInterceptor} from './http-request-interceptor';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzOverlayModule} from 'ng-zorro-antd/core/overlay';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {FooterComponent} from './footer/footer.component';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number'; // use this
import * as echarts from 'echarts';


const sharedComponents = [
  HeaderComponent,
  FileListComponent,
  FileUploadComponent,
  PostagComponent,
  FileSelectComponent,
  FooterComponent
];

const sharedModules = [
  FormsModule,
  CommonModule,
  NzMessageModule,
  NzOverlayModule,
  NzLayoutModule,
  NzFormModule,
  NzCardModule,
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzIconModule,
  NzTypographyModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzUploadModule,
  NzTagModule,
  NzModalModule,
  NzTableModule,
  NzDividerModule,
  NzDescriptionsModule,
  NzListModule,
  NzPageHeaderModule,
  NzSelectModule,
  NzSpinModule,
  NzTabsModule,
  NzResultModule,
  NzInputNumberModule,
  NgxEchartsModule.forRoot({
    echarts,
  }),
];

@NgModule({
  declarations: [sharedComponents, WordCloudComponent, FooterComponent, ],
  imports: [sharedModules],
  exports: [sharedComponents, sharedModules, WordCloudComponent, ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}, ]
})

export class ShareModule {
}
