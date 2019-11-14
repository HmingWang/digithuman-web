import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PagesComponent} from './pages.component';
import {BuildingComponent} from './building/building.component';
import {FileManagerComponent} from './file-manager/file-manager.component';
import {SearchComponent} from './search/search.component';
import {TestPageComponent} from './test-page/test-page.component';
import {SegmentComponent} from './segment/segment.component';
import {FileInfoComponent} from './file-info/file-info.component';


// @ts-ignore
const routes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        {path: 'welcome', component: WelcomeComponent},
        {path: 'file-manager', component: FileManagerComponent},
        {path: 'building', component: BuildingComponent},
        {path: 'search', component: SearchComponent},
        {path: 'test', component: TestPageComponent},
        {path: 'segment', component: SegmentComponent},
        {path: 'feature', component: FileInfoComponent}
      ]
    },
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
