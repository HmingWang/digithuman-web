import { Component, OnInit } from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FileSegmentService} from '../../services/file-segment.service';

@Component({
  selector: 'app-clean-stop',
  templateUrl: './clean-stop.component.html',
  styleUrls: ['./clean-stop.component.scss']
})
export class CleanStopComponent implements OnInit {

  isSpanning = false;
  file: FileStore = new FileStore();
  contentClean: string;
  constructor(private fileStoreService: FileStoreService,
              private fileSegmentService: FileSegmentService,
              private message: NzMessageService) {
  }
  ngOnInit(): void {
  }
  selectFile(id: number) {
    this.isSpanning = true;
    this.fileStoreService.getFile(id).subscribe(f => {
      this.file = f as FileStore;
    });

    this.fileSegmentService.getFileStopSegment(id).subscribe(s => {
      console.log(s);
      this.contentClean = (s as Array<string>)[0];
    }, error => {
      console.log(error);
    }, () => {
      this.isSpanning = false;
    });

  }

}
