import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {FileListComponent} from './file-list/file-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'welcome'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'file-list', component: FileListComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
