import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {FileSegmentService} from '../../services/file-segment.service';
import {FileSegment} from '../../models/file-segment';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {
  selectedValue: any = null;
  fileList: FileStore[] = [];
  file: FileStore = new FileStore();
  fileSegment: FileSegment = new FileSegment();
  isSpanningFile = false;
  isSpanningSegment = false;

  constructor(private fileStoreService: FileStoreService,
              private fileSegmentService: FileSegmentService,
              private message: NzMessageService) {
  }

  getFileList() {
    this.fileStoreService.getFileList().subscribe(items => {
      this.fileList = items as FileStore[];
      console.log('get file list', this.fileList.length);
    }, error => {
      console.log(error);
    });
  }

  getFileSegment(id: number) {
    console.log('get file segment');
    this.isSpanningSegment = true;
    this.fileSegmentService.getFileSegment(id).subscribe(item => {

      this.fileSegment = item as FileSegment;

    }, error => {
      this.message.error(error);
    }, () => {
      this.isSpanningSegment = false;
    });
  }

  ngOnInit() {
    this.getFileList();
  }

  getFile(id: number) {
    console.log('get file');
    this.isSpanningFile = true;
    this.fileStoreService.getFile(id).subscribe(file => {
        this.file = file as FileStore;

      }, error => {
        this.message.error(error);
      }, () => {
        this.isSpanningFile = false;
      }
    )
    ;
  }

  selectFile(selectedValue: any) {
    this.getFile(selectedValue);
    this.getFileSegment(selectedValue);
  }
}
