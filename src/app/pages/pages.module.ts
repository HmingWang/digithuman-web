import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {WelcomeComponent} from './welcome/welcome.component';
import { FileListComponent } from './file-list/file-list.component';
import {SharedModule} from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import {ServicesModule} from '../services/services.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { BuildingComponent } from './building/building.component';


@NgModule({
  declarations: [WelcomeComponent, FileListComponent, PagesComponent, FileUploadComponent, BuildingComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ServicesModule,
  ]
})
export class PagesModule { }
