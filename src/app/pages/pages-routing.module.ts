import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PagesComponent} from './pages.component';
import {BuildingComponent} from './building/building.component';
import {FileManagerComponent} from './file-manager/file-manager.component';
import {SearchComponent} from './search/search.component';
import {TestCommand} from '@angular/cli/commands/test-impl';
import {TestPageComponent} from './test-page/test-page.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'welcome', component: WelcomeComponent},
      {path: 'file-manager', component: FileManagerComponent},
      {path: 'building', component: BuildingComponent},
      {path: 'search', component: SearchComponent},
      {path: 'test', component: TestPageComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
