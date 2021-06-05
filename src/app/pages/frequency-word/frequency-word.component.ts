import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd/message';
import {FileFeatureService} from '../../services/file-feature.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-frequency-word',
  templateUrl: './frequency-word.component.html',
  styleUrls: ['./frequency-word.component.scss']
})
export class FrequencyWordComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  wordFreqArray: { name: string, value: bigint } [] = new Array<{ name: string, value: bigint }>();

  constructor(private fileStoreService: FileStoreService,
              private message: NzMessageService,
              private fileFeatureService: FileFeatureService) {
  }

  exportExcel(): void{
    const data =  this.wordFreqArray.map(it => [it.name, it.value]);
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const ws2: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.utils.book_append_sheet(wb, ws2, 'Sheet2');
    console.log(wb);
    /* save to file */
    XLSX.writeFile(wb, 'word-freq.xlsx');
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
