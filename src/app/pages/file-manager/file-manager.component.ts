import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {
  isVisibleFileUpload = false;

  constructor() {
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

  onDelete() {

  }
}
