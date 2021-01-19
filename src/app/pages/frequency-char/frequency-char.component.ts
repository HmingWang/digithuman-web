import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FileFeatureService} from '../../services/file-feature.service';


@Component({
  selector: 'app-frequency-char',
  templateUrl: './frequency-char.component.html',
  styleUrls: ['./frequency-char.component.scss']
})

export class FrequencyCharComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();

  charFreqArray: { name: string, value: bigint } [] = new Array<{ name: string, value: bigint }>();

  constructor(private fileStoreService: FileStoreService,
              private message: NzMessageService,
              private fileFeatureService: FileFeatureService) {
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

    this.charFreqArray = [];
    this.fileFeatureService.getCharFrequency(id).subscribe(it => {
      for (const i of it as Array<{ name: string, value: bigint }>) {
        this.charFreqArray = [...this.charFreqArray, i];
      }
      this.charFreqArray.sort((a, b) => {
        if (a.value > b.value) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }
}
