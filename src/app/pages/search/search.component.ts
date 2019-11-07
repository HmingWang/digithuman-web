import {Component, OnInit} from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  isSpinning = false;
  listOfData: any = [];
  cols: any = [];
  isVisibleFileContent = false;
  fileName = '';
  content = '';

  constructor(private fileStoreService: FileStoreService) {
  }

  ngOnInit() {
  }

  showFile(id: any, filename: string) {
    this.isVisibleFileContent = true;
    this.fileName = filename;
    this.fileStoreService.getFile(id).subscribe(res => {
      console.log('get file content:', res);
      this.content = res['content'];
      this.content = this.content.substr(0, 1000);
    }, err => {
      console.log('get file content error. ', err);
    });
    console.log('2:' + this.content);
  }
}
