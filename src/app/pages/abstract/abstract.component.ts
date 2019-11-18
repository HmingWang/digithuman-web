import {Component, OnInit} from '@angular/core';
import {FileStore} from '../../models/file-store';
import {FileStoreService} from '../../services/file-store.service';
import {FileFeatureService} from '../../services/file-feature.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.scss']
})
export class AbstractComponent implements OnInit {
  isSpanning = false;
  file: FileStore = new FileStore();
  abstract: string;

  constructor(private fileStoreService: FileStoreService,
              private fileFeatureService: FileFeatureService,
              private message: NzMessageService) {
  }

  ngOnInit() {
  }

  selectFile(id: number) {
    this.isSpanning = true;
    this.fileStoreService.getFile(id).subscribe(f => {
      this.file = f as FileStore;
    });

    this.fileFeatureService.getAbstract(id).subscribe(s => {
      console.log(s);
      this.abstract = (s as Array<string>).join('；');
    }, error => {
      console.log(error);
    }, () => {
      this.isSpanning = false;
    });

  }
}
