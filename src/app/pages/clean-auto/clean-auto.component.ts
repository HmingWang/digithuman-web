import { Component, OnInit } from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';
import {FileFeatureService} from '../../services/file-feature.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FileStore} from '../../models/file-store';
import {FileSegmentService} from "../../services/file-segment.service";

@Component({
  selector: 'app-clean-auto',
  templateUrl: './clean-auto.component.html',
  styleUrls: ['./clean-auto.component.scss']
})
export class CleanAutoComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  abstract: string;
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

    this.fileSegmentService.getFileClean(id).subscribe(s => {
      console.log(s);
      this.abstract = (s as Array<string>)[0];
    }, error => {
      console.log(error);
    }, () => {
      this.isSpanning = false;
    });

  }
}
