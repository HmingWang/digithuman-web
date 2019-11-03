import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {FileListComponent} from './file-list/file-list.component';
import {PagesComponent} from './pages.component';
import {FileUploadComponent} from './file-upload/file-upload.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'file-list', component: FileListComponent},
      {path: 'file-upload', component: FileUploadComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
