import {Component, OnInit} from '@angular/core';
import {FileFeature} from '../../models/file-feature';
import {FILEFEATURE_HEADER} from '../../app.globals';
import {FileFeatureService} from '../../services/file-feature.service';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-file-info',
  templateUrl: './file-info.component.html',
  styleUrls: ['./file-info.component.scss']
})
export class FileInfoComponent implements OnInit {
  fileName: string;
  fileFeatureItem: FileFeature = new FileFeature();
  colDetails = FILEFEATURE_HEADER;
  file: FileStore = new FileStore();
  private isSpinning = false;
  private fileList: FileStore[];

  constructor(private fileFeatureService: FileFeatureService, private fileStoreService: FileStoreService, private message: NzMessageService) {
  }

  getFileList() {
    this.fileStoreService.getFileList('whaim').subscribe(items => {
      this.fileList = items as FileStore[];
      console.log('get file list', this.fileList.length);
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getFileList();
  }

  showFileFeature(id: any) {
    this.isSpinning = true;
    this.fileFeatureService.getFileFeature(id).subscribe(item => {
      this.isSpinning = true;
      this.fileName = '';
      this.fileFeatureItem = item as FileFeature;
      this.isSpinning = false;
      console.log(this.fileFeatureItem);
    }, error => {
      console.log('get filefeature error', error);
    });
  }

  selectFile(selectedValue: any) {
    this.showFileFeature(selectedValue);
  }
}
