import {Component, OnInit} from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';
import {FileStore} from '../../models/file-store';
import {FileFeatureService} from '../../services/file-feature.service';
import {FileFeature} from '../../models/file-feature';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  listOfData = Array<FileStore>();
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
    this.cols = [
      {field: 'id', header: '序号'},
      {field: 'filename', header: '文件名'},
      {field: 'filelen', header: '长度'},
      {field: 'filetype', header: '类型'},
      {field: 'encoding', header: '编码'},
      {field: 'uptime', header: '更新时间'},
    ];

    this.colDetails = [
      {field: 'id', header: '文件序号'},
      {field: 'countword', header: '字数'},
      {field: 'countpunc', header: '标点数'},
      {field: 'countsentence', header: '句数'},
      {field: 'countsection', header: '平均句长'},
      {field: 'sentencelen', header: '平均句长方差'},
      {field: 'sectionlen', header: '平均句长标准差'},
      {field: 'sentencelenvar', header: '段落数'},
      {field: 'sentencelenstd', header: '平均段长'},
      {field: 'sectionlenvar', header: '平均段长方差'},
      {field: 'sectionlenstd', header: '平均段长标准差'},
      {field: 'countdialog', header: '对白数'},
      {field: 'countbook', header: '书名数'},
      {field: 'sentencew', header: '问号句数'},
      {field: 'sentenceg', header: '感叹号句数'},
      {field: 'sentencep', header: '普通句句数'},
      {field: 'sentenceq', header: '其他句数'},
    ];
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
      this.content = this.content.substr(0, 1000);
    }, err => {
      console.log('get file content error. ', err);
    });
    console.log('2:' + this.content);
  }

  showFileFeature(id: any, filename: string) {
    this.isSpinning = true;
    this.fileFeatureService.getFileFeature(id).subscribe(item => {
      this.isSpinning = true;
      this.fileName = filename;
      this.fileFeatureItem = item as FileFeature;
      this.isSpinning = false;
      this.isVisibleFileFeature = true;
      console.log(this.fileFeatureItem);
    }, error => {
      console.log('get filefeature error', error);
    });
  }

  handleOk(): void {
    this.isVisibleFileContent = false;
    this.isVisibleFileFeature = false;
  }

  handleCancel(): void {
    this.isVisibleFileContent = false;
    this.isVisibleFileFeature = false;
  }
}
