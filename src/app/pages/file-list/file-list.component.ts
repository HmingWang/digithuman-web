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

  constructor(private fileStoreService: FileStoreService) {
  }

  getFileList() {
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
    this.getFileList();
  }

  deleteRow(id: bigint) {
    console.log('delete row by id ' + id);
    this.fileStoreService.deleteFileById(id);
  }
}
