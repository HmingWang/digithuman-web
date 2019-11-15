import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Frequency} from '../../models/frequency';

@Component({
  selector: 'app-frequency-char',
  templateUrl: './frequency-char.component.html',
  styleUrls: ['./frequency-char.component.scss']
})
export class FrequencyCharComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  charFreq: Frequency[];

  constructor(private fileStoreService: FileStoreService, private message: NzMessageService) {
  }

  ngOnInit() {
  }

  selectFile(id: number) {
    this.isSpanning = true;
    this.fileStoreService.getFile(id).subscribe(it => {
      this.file = it as FileStore;
    }, error => {
      this.message.error(error);
    }, () => {
      this.isSpanning = false;
    });
  }
}
