import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';

@Component({
  selector: 'app-file-select',
  templateUrl: './file-select.component.html',
  styleUrls: ['./file-select.component.scss']
})
export class FileSelectComponent implements OnInit {
  @Output() eventSelect = new EventEmitter<number>();
  fileList: FileStore[];


  constructor(private fileStoreService: FileStoreService) {
  }

  ngOnInit() {
    this.getFileList();
  }

  getFileList() {
    this.fileStoreService.getFileList('whaim').subscribe(items => {
      this.fileList = items as FileStore[];
      console.log('get file list', this.fileList.length);
    }, error => {
      console.log(error);
    });
  }




  selectFile(selectedValue: any) {
    this.eventSelect.emit(selectedValue);
  }
}
