import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from '../services/authorize.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ErrorService} from '../services/error.service';
import {AuthUser} from '../models/auth-user';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isCollapsed = true;

  user: AuthUser = new AuthUser();

  constructor(private authorizeService: AuthorizeService, private message: NzMessageService, private errorService: ErrorService) {

  }

  ngOnInit() {
    this.authorizeService.getUserInfo().subscribe(obj => {
      this.user = obj as AuthUser;
    }, error => this.errorService.handleError(error));
  }
}
