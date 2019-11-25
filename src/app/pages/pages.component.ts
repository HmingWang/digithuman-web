import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from '../services/authorize.service';
import {NzMessageService} from 'ng-zorro-antd';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isCollapsed = true;
  private res: Response;
  username: any;

  constructor(private authorizeService: AuthorizeService, private message: NzMessageService) {

  }

  ngOnInit() {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAA');
    this.authorizeService.getUserInfo().subscribe(obj => {
      this.res = obj as Response;
      console.log('++++++++++' + this.res);
    }, (error: HttpErrorResponse) => {

      console.log('bbbbbbbbbbbbbbbbbbb');
      console.log(error.message);
      console.log(error.status);
      console.log(error.url);
    });
  }
}
