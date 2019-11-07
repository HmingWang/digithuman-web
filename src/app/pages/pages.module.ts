import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import {SharedModule} from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import {ServicesModule} from '../services/services.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BuildingComponent } from './building/building.component';
import { SearchComponent } from './search/search.component';
import { FileManagerComponent } from './file-manager/file-manager.component';


@NgModule({
  declarations: [WelcomeComponent, PagesComponent, FileUploadComponent, BuildingComponent, SearchComponent, FileManagerComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ServicesModule,
  ]
})
export class PagesModule { }
