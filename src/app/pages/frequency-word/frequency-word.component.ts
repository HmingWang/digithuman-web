import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FileFeatureService} from '../../services/file-feature.service';

@Component({
  selector: 'app-frequency-word',
  templateUrl: './frequency-word.component.html',
  styleUrls: ['./frequency-word.component.scss']
})
export class FrequencyWordComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  wordFreqArray: any[];

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

    this.wordFreqArray = [];
    this.fileFeatureService.getWordFrequency(id).subscribe(it => {
      for (const i of it as Array<{ name: string, value: bigint }>) {
        this.wordFreqArray = [...this.wordFreqArray, i];
      }
      this.wordFreqArray.sort((a, b) => {
        if (a.value > b.value) {
          return -1;
        } else {
          return 1;
        }
      });
    });
  }
}
