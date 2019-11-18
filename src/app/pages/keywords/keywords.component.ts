import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {NzMessageService} from 'ng-zorro-antd';
import {FileFeatureService} from '../../services/file-feature.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss']
})
export class KeywordsComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  keywords = [];

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

    this.keywords = [];
    this.fileFeatureService.getKeywords(id).subscribe(it => {
      for (const i of it as Array<string>) {
        this.keywords = [...this.keywords, i];
      }
    });
  }
}
