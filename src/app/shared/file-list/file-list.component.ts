import {Component, OnInit} from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';
import {FileStore} from '../../models/file-store';
import {FileFeatureService} from '../../services/file-feature.service';
import {FileFeature} from '../../models/file-feature';
import {FILEFEATURE_HEADER, FILESTORE_HEADER} from '../../app.globals';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  listOfData: FileStore[] = [];
  listOfDisplayData: FileStore[] = [];
  owner = 'whaim';
  cols = [];
  loading = true;
  isVisibleFileContent = false;
  isVisibleFileFeature = false;
  fileName = '';
  content = '';
  isSpinning = false;
  fileFeatureItem: FileFeature = new FileFeature();
  colDetails = [];
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  numberOfChecked = 0;
  mapOfCheckedId: { [key: string]: boolean } = {};

  constructor(private fileStoreService: FileStoreService, private fileFeatureService: FileFeatureService) {
  }

  getData() {
    this.loading = true;
    this.fileStoreService.getFileList(this.owner).subscribe((data: any) => {
      this.listOfData = data;
      this.loading = false;
    });
  }


  ngOnInit() {
    this.listOfData = [];
    this.cols = FILESTORE_HEADER;

    this.colDetails = FILEFEATURE_HEADER;
    this.getData();
  }

  deleteFile(id: bigint) {
    console.log('delete row by id ' + id);
    this.fileStoreService.deleteFileById(id).subscribe((res) => {
      console.log('del ok', res);
      this.getData();
    }, (err) => {
      console.log('del err', err);
    });
  }

  showFile(id: any, filename: string) {
    this.isVisibleFileContent = true;
    this.fileName = filename;
    this.fileStoreService.getFile(id).subscribe(res => {
      console.log('get file content:', res);
      this.content = res['content'];
      // this.content = this.content.substr(0, 1000);
    }, err => {
      console.log('get file content error. ', err);
    });
    console.log('2:' + this.content);
  }

  // showFileFeature(id: any, filename: string) {
  //   this.isSpinning = true;
  //   this.fileFeatureService.getFileFeature(id).subscribe(item => {
  //     this.isSpinning = true;
  //     this.fileName = filename;
  //     this.fileFeatureItem = item as FileFeature;
  //     this.isSpinning = false;
  //     this.isVisibleFileFeature = true;
  //     console.log(this.fileFeatureItem);
  //   }, error => {
  //     console.log('get filefeature error', error);
  //   });
  // }

  handleOk(): void {
    this.isVisibleFileContent = false;
    this.isVisibleFileFeature = false;
  }

  handleCancel(): void {
    this.isVisibleFileContent = false;
    this.isVisibleFileFeature = false;
  }

  currentPageDataChange($event: FileStore[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  checkAll(value: boolean) {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  refreshStatus() {
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.listOfData.filter(item => this.mapOfCheckedId[item.id]).length;
  }
}
