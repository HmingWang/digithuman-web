import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pages' },
  { path: 'pages', loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule) },
  // { path: 'fileupload', loadChildren: () => import('./pages/fileupload/fileupload.module')
  //     .then(m => m.FileuploadModule) }
  // {path: 'welcome', component: WelcomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
