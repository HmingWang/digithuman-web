import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {BASE_URL} from '../../app.globals';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnInit {

  constructor(private http: HttpClient, private msg: NzMessageService) {}
  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  uploading = false;
  fileList: UploadFile[] = [];

  ngOnInit() {
    this.fileList = [];
  }

  beforeUpload = (file: UploadFile): boolean => { this.fileList = this.fileList.concat(file); return false; }

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', BASE_URL + '/api/upload', formData, {
      // reportProgress: true
    });
    this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        () => {
          this.uploading = false;
          this.fileList = [];
          this.msg.success('上传成功！');
        },
        () => {
          this.uploading = false;
          this.msg.error('上传失败！');
        }
      );
  }
}
