import {Component, OnInit} from '@angular/core';
import {FileStoreService} from '../../services/file-store.service';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  isVisibleFileUpload = false;

  constructor(private fileStoreService: FileStoreService) {
  }

  ngOnInit() {
  }

  handleOk(): void {
    this.isVisibleFileUpload = false;
  }

  handleCancel(): void {
    this.isVisibleFileUpload = false;
  }

  onFileUpload() {
    this.isVisibleFileUpload = true;
  }
}
