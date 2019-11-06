import {Component, OnInit} from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';
import {FileStore} from '../../models/file-store';

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
  isVisible = false;
  fileName = '';
  content = '';

  constructor(private fileStoreService: FileStoreService) {
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
    this.isVisible = true;
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

  showFileFeature(id: any) {
    return 0;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
